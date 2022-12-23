from sqlalchemy import Column, Integer, String, ForeignKey, TIMESTAMP
from ..config.ConfigDB import Base

class Immobile(Base):
    __tablename__ = "immobile"

    id = Column(Integer, primary_key=True, index=True)
    id_user = Column(Integer, ForeignKey("user.id"), nullable=False)
    id_status = Column(Integer, ForeignKey("status.id"), nullable=False)
    title = Column(String(500), nullable=False)
    description = Column(String(5000))
    price = Column(String(50), nullable=False)
    datetime = Column(TIMESTAMP)
    n_rooms = Column(Integer, nullable=False)
    square_meters = Column(Integer, nullable=False)
    street = Column(String(50), nullable=False)
    neighborhood = Column(String(50), nullable=False)
    city = Column(String(50), nullable=False)
    state = Column(String(50), nullable=False)
    cep = Column(String(50), nullable=False)
    localization = Column(String(500))