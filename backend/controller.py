from sqlalchemy import desc
from sqlalchemy.orm import Session

from backend import models


def get_location(db: Session):
    longitude = db.query(models.GPS.longitude).order_by(desc(models.GPS.id)).first()
    latitude = db.query(models.GPS.latitude).order_by(desc(models.GPS.id)).first()
    return longitude, latitude

def update_location(db: Session, _longitude: float, _latitdue: float):
    db_gps = models.GPS(longitude = _longitude, latitude = _latitdue)
    db.add(db_gps)
    db.commit()
    db.refresh(db_gps)
    return db_gps