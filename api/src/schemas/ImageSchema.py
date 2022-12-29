from pydantic import BaseModel

class ImageCreate(BaseModel):
    id_immobile: int
    base64: str

class Image(ImageCreate):
    id: int
    
    class Config:
        orm_mode = True