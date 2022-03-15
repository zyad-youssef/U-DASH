from sqlalchemy import Boolean, Column, ForeignKey, Integer, Numeric, String
from sqlalchemy.orm import relationship

from database import Base

class User(Base):
        __tablename__ = "users"

        id = Column(Integer, primary_key=True, index=True)
        email = Column(String(256), unique=True, index=True)
        hashed_password = Column(String(256))
        is_active = Column(Boolean, default=True)

        orders = relationship("Orders", back_populates="owner")

class Orders(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(256), index=True)
    location = Column(String(256), index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))
    food_id = Column(Integer, ForeignKey("foods.id"))

    owner = relationship("User", back_populates="orders")


class GPS(Base):
    __tablename__ = "gps"

    id = Column(Integer, primary_key=True, index=True)
    longitude = Column(Numeric, index=True)
    latitude = Column(Numeric, index=True)

class Foods(Base):
    __tablename__ = "foods"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(256), index=True)
    Description = Column(String(256), index=True)

