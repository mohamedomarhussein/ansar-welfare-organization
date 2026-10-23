from datetime import datetime, timezone

from werkzeug.security import check_password_hash, generate_password_hash

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Admin(db.Model):
    __tablename__ = "admins"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    created_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


class SiteContent(db.Model):
    __tablename__ = "site_content"

    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(100), unique=True, nullable=False, index=True)
    value = db.Column(db.Text, nullable=False, default="")
    updated_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False,
    )


class Muhadhara(db.Model):
    __tablename__ = "muhadhara"

    id = db.Column(db.Integer, primary_key=True)

    mosque_name = db.Column(db.String(200), nullable=False)
    location = db.Column(db.String(300), nullable=False)
    date = db.Column(db.String(10), nullable=False)
    time = db.Column(db.String(50), nullable=False)
    sheikh_name = db.Column(db.String(200), nullable=False)
    topic = db.Column(db.String(250), nullable=False)
    details = db.Column(db.Text, nullable=False, default="")

    is_published = db.Column(db.Boolean, nullable=False, default=False)

    created_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    updated_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    def to_dict(self):
        return {
            "id": self.id,
            "mosque_name": self.mosque_name,
            "location": self.location,
            "date": self.date,
            "time": self.time,
            "sheikh_name": self.sheikh_name,
            "topic": self.topic,
            "details": self.details,
            "is_published": self.is_published,
            "created_at": (
                self.created_at.isoformat() if self.created_at else None
            ),
            "updated_at": (
                self.updated_at.isoformat() if self.updated_at else None
            ),
        }
