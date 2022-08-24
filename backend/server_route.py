#This is the main backend for all U-dash operations
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from backend import controller
# from backend import models
from backend.database import SessionLocal, engine

# models.Base.metadata.create_all(bind=engine)

app = FastAPI()
origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=['GET'],
    allow_headers=['Content-Type','application/xml'],
)

@app.get("/")
async def root():
    return {"connection test: PASSED!"}

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/gps/{longitude}/{latitude}")
async def update_gps(longitude: float, latitude: float, db: Session = Depends(get_db)):
    gps = controller.update_location(db, longitude, latitude)
    return gps.longitude, latitude

@app.get("/gps")
async def get_cart_location(db: Session = Depends(get_db)):
    return controller.get_location(db)

@app.get("/ping")
async def get_ping():
    return 'hi'