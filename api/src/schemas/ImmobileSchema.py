from pydantic import BaseModel
from datetime import datetime
from typing import Union

class ImmobileCreate(BaseModel):
    id_user: int
    id_status: int
    title: str
    description: Union[str, None] = None
    price: str
    n_rooms: int
    square_meters: int
    street: str
    neighborhood: str
    city: str
    state: str
    cep: str
    localization: Union[str, None] = None


class Immobile(ImmobileCreate):
    id: int
    datetime: datetime
    
    class Config:
        orm_mode = True