import getpass
import re

from app import create_app
from app.models import Admin, db


def main():
    app = create_app()

    with app.app_context():
        if Admin.query.count() >= 1:
            print("An administrator already exists. No account was created.")
            return

        email = input("Administrator email: ").strip().lower()

        if not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", email):
            print("Please enter a valid email address.")
            return

        password = getpass.getpass("Create admin password: ")
        confirmation = getpass.getpass("Confirm admin password: ")

        if len(password) < 12:
            print("Use a password with at least 12 characters.")
            return

        if password != confirmation:
            print("Passwords do not match.")
            return

        admin = Admin(email=email)
        admin.set_password(password)

        db.session.add(admin)
        db.session.commit()

        print("Administrator account created successfully.")


if __name__ == "__main__":
    main()
