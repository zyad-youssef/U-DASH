from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

import database

class User(database.Base):
        __tablename__ = "users"

        id = Column(Integer, primary_key=True, index=True)
        email = Column(String, unique=True, index=True)
        hashed_password = Column(String)
        is_active = Column(Boolean, default=True)

        orders = relationship("Orders", back_populates="owner")

class Orders(database.Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    location = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))
    food_id = Column(Integer, ForeignKey("foods.id"))

    owner = relationship("User", back_populates="orders")


class GPS(database.Base):
    __tablename__ = "gps"

    id = Column(Integer, primary_key=True, index=True)
    longitude = Column(Integer, index=True)
    latitude = Column(Integer, index=True)

class Foods(database.Base):
    __tablename__ = "foods"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    Description = Column(String, index=True)

