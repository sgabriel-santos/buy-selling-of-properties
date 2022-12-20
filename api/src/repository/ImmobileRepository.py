from sqlalchemy.ext.asyncio import AsyncSession
from ..schemas import ImmobileSchema
from ..models import ImmobileModel
from sqlalchemy.future import select
from sqlalchemy import update, insert, delete, and_

immobile_model = ImmobileModel.Immobile

# CREATE operations
async def create_Immobile(db: AsyncSession, immobile: ImmobileSchema.ImmobileCreate):
    await db.execute(insert(immobile_model).values(immobile.__dict__))
    return immobile 


# READ operations
async def get_immobiles(db: AsyncSession):
    response = await db.execute(select(immobile_model))
    return response.scalars().all()

async def get_immobile_by_id(db: AsyncSession, immobile_id: int):
    response = await db.execute(select(immobile_model).where(immobile_model.id == immobile_id))
    return response.scalars().first()


# UPDATE operations
async def update_immobile(db: AsyncSession, immobile: ImmobileSchema.ImmobileCreate, immobile_id: int):
    response = await db.execute(update(immobile_model).where(immobile_model.id == immobile_id).values(immobile.__dict__))
    return response

# DELETE operations
async def delete_immobile(db: AsyncSession, immobile_id: int):
    response = await db.execute(delete(immobile_model).where(immobile_model.id == immobile_id))
    return response