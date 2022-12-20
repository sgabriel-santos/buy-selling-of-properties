from sqlalchemy import Column, Integer, String, Boolean
from ..config.ConfigDB import Base

class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    username = Column(String(50))
    password = Column(String(50))