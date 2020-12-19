from sqlalchemy.orm import Session
import requests
from python_graphql_client import GraphqlClient
import os
from . import models, schemas

GRAPHQL_URL = os.getenv('GRAPHQL_URL')
GRAPHQL_ADMIN_SECRET = os.getenv('GRAPHQL_ADMIN_SECRET')

client = GraphqlClient(endpoint=GRAPHQL_URL, headers={'x-hasura-admin-secret': GRAPHQL_ADMIN_SECRET})

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

