#This is the main backend for all U-dash operations
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

import controller, models
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

origins = [
    'http://localhost:3000'
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['GET'],
    allow_headers=['Content-Type','application/xml'],
)

@app.get("/")
async def root():
    return {"This sucks"}

@app.put("/gps/{longitude}/{latitude}")
async def update_gps(longitude: int, latitude: int, db: Session = Depends(get_db)):
    controller.update_location(db, longitude, latitude)