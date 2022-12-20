from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    username: str
    password: str


class User(UserCreate):
    id: int
    
    class Config:
        orm_mode = True