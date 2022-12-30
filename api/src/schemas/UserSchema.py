from pydantic import BaseModel
from typing import Union

class UserCreate(BaseModel):
    name: str
    email: str
    username: str
    password: str
    phone: Union[str, None]
    image: Union[str, None]


class User(UserCreate):
    id: int
    
    class Config:
        orm_mode = True