from sqlalchemy.orm import Session

import models


def get_location(db: Session):
    longitude = db.query(models.GPS.longitude).first()
    latitude = db.query(models.GPS.latitude).first()
    return longitude, latitude
def update_location(db: Session, _longitude: int, _latitdue: int):
    db_gps = models.GPS(longitude = _longitude, latitude = _latitdue)
    db.add(db_gps)
    return db_gps