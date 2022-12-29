from sqlalchemy.ext.asyncio import AsyncSession
from ..schemas import ImageSchema
from ..models import ImageModel
from sqlalchemy.future import select
from sqlalchemy import update, insert, and_

image_model = ImageModel.Image

async def get_images_by_id_immobile(db: AsyncSession, immobile_id: int):
    response = await db.execute(select(image_model).where(image_model.id_immobile == immobile_id))
    return response.scalars().all()