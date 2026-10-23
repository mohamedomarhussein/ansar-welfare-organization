import os
import smtplib
from email.message import EmailMessage
import re
from datetime import timedelta

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    get_jwt_identity,
    jwt_required,
)

from app.models import Admin, Muhadhara, SiteContent, db

load_dotenv()

DEFAULT_CONTENT = {
    "organization_name": "Ansar Welfare Organization",
    "office_address": "Iftin, opposite Sada Mosque",
    "phone_primary": "0721133156",
    "phone_secondary": "0723003071",
    "email": "ansarwelfareorganization7@gmail.com",
    "paybill": "4133187",
    "account_number": "01100611210001",
    "homepage_announcement": "",
}

jwt = JWTManager()


def create_app():
    app = Flask(__name__)

    secret_key = os.getenv("SECRET_KEY")
    jwt_secret_key = os.getenv("JWT_SECRET_KEY")

    if not secret_key or not jwt_secret_key:
        raise RuntimeError(
            "SECRET_KEY and JWT_SECRET_KEY must be configured in backend/.env"
        )

    app.config["SECRET_KEY"] = secret_key
    app.config["JWT_SECRET_KEY"] = jwt_secret_key
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv(
        "DATABASE_URL", "sqlite:///ansar.db"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    jwt.init_app(app)

    CORS(
        app,
        resources={
            r"/api/*": {
                "origins": [
                    "http://localhost:5173",
                    "http://127.0.0.1:5173",
                    "http://localhost:5174",
                    "http://127.0.0.1:5174",
                ]
            }
        },
    )

    @app.post("/api/contact")
    def send_contact_email():
        data = request.get_json(silent=True)

        if not isinstance(data, dict):
            return jsonify({
                "success": False,
                "message": "Please submit the contact form correctly.",
            }), 400

        name = data.get("name", "")
        visitor_email = data.get("email", "")
        subject = data.get("subject", "")
        message = data.get("message", "")

        if not all(
            isinstance(value, str)
            for value in (name, visitor_email, subject, message)
        ):
            return jsonify({
                "success": False,
                "message": "All fields must contain text.",
            }), 400

        name = name.strip()
        visitor_email = visitor_email.strip()
        subject = subject.strip().replace("\\r", " ").replace("\\n", " ")
        message = message.strip()

        if not all((name, visitor_email, subject, message)):
            return jsonify({
                "success": False,
                "message": "Please complete all fields.",
            }), 400

        if (
            len(name) > 120
            or len(visitor_email) > 254
            or len(subject) > 200
            or len(message) > 5000
        ):
            return jsonify({
                "success": False,
                "message": "One or more fields exceed the allowed length.",
            }), 400

        if not re.fullmatch(
            r"[^\\s@]+@[^\\s@]+\\.[^\\s@]+",
            visitor_email,
        ):
            return jsonify({
                "success": False,
                "message": "Please enter a valid email address.",
            }), 400

        mail_server = os.getenv("MAIL_SERVER", "smtp.gmail.com")
        mail_port = int(os.getenv("MAIL_PORT", "587"))
        mail_username = os.getenv("MAIL_USERNAME", "").strip()
        mail_password = os.getenv("MAIL_PASSWORD", "")
        recipient = os.getenv(
            "CONTACT_RECIPIENT",
            "ansarwelfareorganization7@gmail.com",
        ).strip()

        if not mail_username or not mail_password or not recipient:
            return jsonify({
                "success": False,
                "message": (
                    "The email service is not configured yet. "
                    "Please contact us by phone."
                ),
            }), 503

        email_message = EmailMessage()
        email_message["Subject"] = f"Website contact: {subject}"
        email_message["From"] = mail_username
        email_message["To"] = recipient
        email_message["Reply-To"] = visitor_email
        email_message.set_content(
            f"New message from the Ansar Welfare Organization website.\\n\\n"
            f"Name: {name}\\n"
            f"Email: {visitor_email}\\n"
            f"Subject: {subject}\\n\\n"
            f"Message:\\n{message}\\n"
        )

        try:
            with smtplib.SMTP(mail_server, mail_port, timeout=20) as smtp:
                smtp.ehlo()
                smtp.starttls()
                smtp.ehlo()
                smtp.login(mail_username, mail_password)
                smtp.send_message(email_message)
        except Exception:
            app.logger.exception("Website contact email could not be sent.")
            return jsonify({
                "success": False,
                "message": (
                    "We could not send your message right now. "
                    "Please try again later or contact us by phone."
                ),
            }), 502

        return jsonify({
            "success": True,
            "message": "Your message has been sent successfully. Thank you for contacting us!",
        }), 200

    @app.get("/api/health")
    def health():
        return jsonify({"success": True, "message": "Backend is healthy"})

    @app.post("/api/admin/login")
    def admin_login():
        data = request.get_json(silent=True) or {}
        email = str(data.get("email", "")).strip().lower()
        password = data.get("password", "")

        if not isinstance(password, str) or not email or not password:
            return jsonify({
                "success": False,
                "message": "Email and password are required.",
            }), 400

        admin = Admin.query.filter_by(email=email).first()

        if admin is None or not admin.check_password(password):
            return jsonify({
                "success": False,
                "message": "Invalid email or password.",
            }), 401

        token = create_access_token(identity=str(admin.id))

        return jsonify({
            "success": True,
            "access_token": token,
            "admin": {"id": admin.id, "email": admin.email},
        })

    @app.get("/api/admin/me")
    @jwt_required()
    def current_admin():
        admin = db.session.get(Admin, int(get_jwt_identity()))

        if admin is None:
            return jsonify({
                "success": False,
                "message": "Administrator account not found.",
            }), 401

        return jsonify({
            "success": True,
            "admin": {"id": admin.id, "email": admin.email},
        })

    @app.get("/api/content")
    def get_public_content():
        saved_content = {
            item.key: item.value for item in SiteContent.query.all()
        }

        content = {**DEFAULT_CONTENT, **saved_content}

        return jsonify({"success": True, "content": content})

    @app.put("/api/admin/content")
    @jwt_required()
    def update_content():
        admin = db.session.get(Admin, int(get_jwt_identity()))

        if admin is None:
            return jsonify({
                "success": False,
                "message": "Administrator account not found.",
            }), 401

        data = request.get_json(silent=True)

        if not isinstance(data, dict) or not data:
            return jsonify({
                "success": False,
                "message": "Provide at least one content field to update.",
            }), 400

        unknown_keys = set(data) - set(DEFAULT_CONTENT)

        if unknown_keys:
            return jsonify({
                "success": False,
                "message": "One or more content fields are not editable.",
                "fields": sorted(unknown_keys),
            }), 400

        for key, value in data.items():
            if not isinstance(value, str):
                return jsonify({
                    "success": False,
                    "message": f"The value for '{key}' must be text.",
                }), 400

            if len(value) > 5000:
                return jsonify({
                    "success": False,
                    "message": f"The value for '{key}' is too long.",
                }), 400

        for key, value in data.items():
            item = SiteContent.query.filter_by(key=key).first()

            if item is None:
                item = SiteContent(key=key, value=value)
                db.session.add(item)
            else:
                item.value = value

        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Website content updated successfully.",
        })


    def serialize_muhadhara(lecture):
        return lecture.to_dict()

    def validate_muhadhara_data(data, partial=False):
        allowed_fields = {
            "mosque_name",
            "location",
            "date",
            "time",
            "sheikh_name",
            "topic",
            "details",
            "is_published",
        }

        if not isinstance(data, dict):
            return None, "Provide lecture information as a JSON object."

        unknown_fields = set(data) - allowed_fields
        if unknown_fields:
            return None, "Unknown fields: " + ", ".join(sorted(unknown_fields))

        required_fields = {
            "mosque_name",
            "location",
            "date",
            "time",
            "sheikh_name",
            "topic",
        }

        if not partial:
            missing = required_fields - set(data)
            if missing:
                return None, (
                    "Required fields are missing: "
                    + ", ".join(sorted(missing))
                )

        limits = {
            "mosque_name": 200,
            "location": 300,
            "date": 10,
            "time": 50,
            "sheikh_name": 200,
            "topic": 250,
            "details": 5000,
        }

        cleaned = {}

        for field, maximum in limits.items():
            if field not in data:
                continue

            value = data[field]
            if not isinstance(value, str):
                return None, f"'{field}' must be text."

            value = value.strip()

            if field in required_fields and not value:
                return None, f"'{field}' cannot be empty."

            if len(value) > maximum:
                return None, f"'{field}' exceeds {maximum} characters."

            cleaned[field] = value

        if "date" in cleaned:
            from datetime import date as calendar_date

            try:
                parsed_date = calendar_date.fromisoformat(cleaned["date"])
                if parsed_date.isoformat() != cleaned["date"]:
                    raise ValueError
            except ValueError:
                return None, "Date must use the YYYY-MM-DD format."

        if "is_published" in data:
            if not isinstance(data["is_published"], bool):
                return None, "'is_published' must be true or false."
            cleaned["is_published"] = data["is_published"]

        return cleaned, None

    def get_authenticated_admin():
        identity = get_jwt_identity()

        try:
            admin_id = int(identity)
        except (TypeError, ValueError):
            return None

        return db.session.get(Admin, admin_id)

    @app.get("/api/muhadhara")
    def get_published_muhadhara():
        lectures = (
            Muhadhara.query
            .filter_by(is_published=True)
            .order_by(Muhadhara.date.asc(), Muhadhara.time.asc())
            .all()
        )

        return jsonify({
            "success": True,
            "lectures": [serialize_muhadhara(item) for item in lectures],
        })

    @app.get("/api/admin/muhadhara")
    @jwt_required()
    def admin_list_muhadhara():
        if get_authenticated_admin() is None:
            return jsonify({
                "success": False,
                "message": "Administrator account not found.",
            }), 401

        lectures = (
            Muhadhara.query
            .order_by(Muhadhara.date.desc(), Muhadhara.id.desc())
            .all()
        )

        return jsonify({
            "success": True,
            "lectures": [serialize_muhadhara(item) for item in lectures],
        })

    @app.post("/api/admin/muhadhara")
    @jwt_required()
    def admin_create_muhadhara():
        if get_authenticated_admin() is None:
            return jsonify({
                "success": False,
                "message": "Administrator account not found.",
            }), 401

        data, error = validate_muhadhara_data(
            request.get_json(silent=True)
        )

        if error:
            return jsonify({"success": False, "message": error}), 400

        lecture = Muhadhara(
            mosque_name=data["mosque_name"],
            location=data["location"],
            date=data["date"],
            time=data["time"],
            sheikh_name=data["sheikh_name"],
            topic=data["topic"],
            details=data.get("details", ""),
            is_published=data.get("is_published", False),
        )

        try:
            db.session.add(lecture)
            db.session.commit()
        except Exception:
            db.session.rollback()
            app.logger.exception("Could not create Muhadhara announcement.")
            return jsonify({
                "success": False,
                "message": "Could not save the announcement.",
            }), 500

        return jsonify({
            "success": True,
            "message": "Muhadhara announcement created successfully.",
            "lecture": serialize_muhadhara(lecture),
        }), 201

    @app.put("/api/admin/muhadhara/<int:lecture_id>")
    @jwt_required()
    def admin_update_muhadhara(lecture_id):
        if get_authenticated_admin() is None:
            return jsonify({
                "success": False,
                "message": "Administrator account not found.",
            }), 401

        lecture = db.session.get(Muhadhara, lecture_id)

        if lecture is None:
            return jsonify({
                "success": False,
                "message": "Muhadhara announcement not found.",
            }), 404

        data, error = validate_muhadhara_data(
            request.get_json(silent=True),
            partial=True,
        )

        if error:
            return jsonify({"success": False, "message": error}), 400

        for field, value in data.items():
            setattr(lecture, field, value)

        try:
            db.session.commit()
        except Exception:
            db.session.rollback()
            app.logger.exception("Could not update Muhadhara announcement.")
            return jsonify({
                "success": False,
                "message": "Could not update the announcement.",
            }), 500

        return jsonify({
            "success": True,
            "message": "Muhadhara announcement updated successfully.",
            "lecture": serialize_muhadhara(lecture),
        })

    @app.delete("/api/admin/muhadhara/<int:lecture_id>")
    @jwt_required()
    def admin_delete_muhadhara(lecture_id):
        if get_authenticated_admin() is None:
            return jsonify({
                "success": False,
                "message": "Administrator account not found.",
            }), 401

        lecture = db.session.get(Muhadhara, lecture_id)

        if lecture is None:
            return jsonify({
                "success": False,
                "message": "Muhadhara announcement not found.",
            }), 404

        try:
            db.session.delete(lecture)
            db.session.commit()
        except Exception:
            db.session.rollback()
            app.logger.exception("Could not delete Muhadhara announcement.")
            return jsonify({
                "success": False,
                "message": "Could not delete the announcement.",
            }), 500

        return jsonify({
            "success": True,
            "message": "Muhadhara announcement deleted successfully.",
        })


    with app.app_context():
        db.create_all()

        for key, value in DEFAULT_CONTENT.items():
            if SiteContent.query.filter_by(key=key).first() is None:
                db.session.add(SiteContent(key=key, value=value))

        db.session.commit()

    return app
