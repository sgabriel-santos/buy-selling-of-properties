from sqlalchemy import Column, Integer, ForeignKey, Text
from ..config.ConfigDB import Base

class Image(Base):
    __tablename__ = "image"

    id = Column(Integer, primary_key=True, index=True)
    id_immobile = Column(Integer, ForeignKey("immobile.id"), nullable=False)
    base64 = Column(Text(4294000000))