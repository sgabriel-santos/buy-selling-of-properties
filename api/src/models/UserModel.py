from sqlalchemy import Column, Integer, String, Text
from ..config.ConfigDB import Base

class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    email = Column(String(50))
    username = Column(String(50))
    password = Column(String(50))
    phone = Column(String(50))
    image = Column(Text(4294000000))