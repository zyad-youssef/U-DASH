from tokenize import Double
from typing import List, Optional
from unicodedata import numeric

from pydantic import BaseModel


class OrdersBase(BaseModel):
    title: str

class OrdersCreate(OrdersBase):
    location: str

class Orders(OrdersBase):
    id: int
    owner_id: int
    food_id: int
    class Config:
        orm_mode = True

class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    items: list[Orders] = []

    class Config:
        orm_mode = True

class GPSBase(BaseModel):
    longitude: float
    latitude: float

class GPSCreate(GPSBase):
    pass

class GPS(GPSBase):
    id: int

    class Config:
        orm_mode = True

class FoodsBase(BaseModel):
    title: str
    description: Optional[str] = None

class FoodsCreate(FoodsBase):
    pass

class Foods(FoodsBase):
    id: int

    class Config:
        orm_mode = True


