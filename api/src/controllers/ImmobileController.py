from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status
from ..repository import ImmobileRepository
from . import ImageController
from ..schemas import ImmobileSchema
from ..models import ImmobileModel
from ..middleware.utils_db import get_next_id

# CREATE operations
async def create_immobile(db: AsyncSession, immobile: ImmobileSchema.ImmobileCreate, images: list[str]):
    try:
        immobile_id = await get_next_id(db, ImmobileModel.Immobile.__tablename__)
        db_immobile = await ImmobileRepository.create_Immobile(db, immobile=immobile)
        await ImageController.add_multiple_image(db, immobile_id, images)
        await db.commit()
        return immobile
    except:
        await db.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Server Error")


# READ operations
async def get_immobiles(db: AsyncSession):
    try:
        return await ImmobileRepository.get_immobiles(db)
    except:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Server Error")
    
async def get_immobiles_with_image(db: AsyncSession):
    try:
        return await ImmobileRepository.get_immobiles_with_image(db)
    except:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Server Error")

async def get_immobile_by_id(db: AsyncSession, immobile_id: int):
    db_immobile = await ImmobileRepository.get_immobile_by_id(db, immobile_id=immobile_id)
    if not db_immobile:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Immobile not Found")
    return db_immobile


# UPDATE operations
async def update_immobile(db: AsyncSession, immobile: ImmobileSchema.ImmobileCreate, immobile_id: int):
    db_immobile = await ImmobileRepository.get_immobile_by_id(db, immobile_id=immobile_id)
    if not db_immobile:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Immobile Not Found")
    
    try:
        await ImmobileRepository.update_immobile(db, immobile=immobile, immobile_id=immobile_id)
        await db.commit()
        return immobile
    except:
        await db.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Server Error")


# DELETE operations
async def delete_immobile(db: AsyncSession, immobile_id: int):
    db_immobile = await ImmobileRepository.get_immobile_by_id(db, immobile_id=immobile_id)
    if not db_immobile:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="immobile Not Found")

    try:
        await ImmobileRepository.delete_immobile(db, immobile_id=immobile_id)
        await db.commit()
        return db_immobile
    except:
        await db.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Server Error")
