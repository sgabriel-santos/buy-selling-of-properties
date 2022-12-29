from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from ..middleware.utils_db import get_session
from ..schemas import UserSchema, ImageSchema
from ..controllers import ImageController 
from typing import List
from ..middleware.security import get_current_user

router = APIRouter(tags=["image"], prefix='/image')

# GET method
@router.get("/", response_model=List[ImageSchema.Image])
async def get_images_by_id_immobile(immobile_id: int, db: AsyncSession = Depends(get_session), current_user: UserSchema.User = Depends(get_current_user)):
    """
    Get images from database.

    Parameters:
    -------
    None.

    Returns:
    -------
    image list.
    """
    return await ImageController.get_images_by_id_immobile(db, immobile_id)