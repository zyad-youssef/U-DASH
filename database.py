from sqlalchemy import create_engine
import sqlalchemy.ext.declarative as declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = 'mysql+mysqlconnector://root@localhost:3306/udashdb'

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal  = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()