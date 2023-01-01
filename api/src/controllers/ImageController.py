from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status
from ..repository import ImageRepository

async def get_images_by_id_immobile(db: AsyncSession, immobile_id: int):
    db_image = await ImageRepository.get_images_by_id_immobile(db, immobile_id=immobile_id)
    return db_image

async def add_multiple_image(db: AsyncSession, id_immobile: int, images: list[str]):
    for image in images:
        await ImageRepository.add_image(db, {"id_immobile": id_immobile, "base64": image})