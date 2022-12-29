from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status
from ..repository import ImageRepository

async def get_images_by_id_immobile(db: AsyncSession, immobile_id: int):
    db_image = await ImageRepository.get_images_by_id_immobile(db, immobile_id=immobile_id)
    return db_image