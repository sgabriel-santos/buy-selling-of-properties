from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from ..middleware.utils_db import get_session
from ..schemas import UserSchema, ImmobileSchema
from ..controllers import ImmobileController
from typing import List
from ..middleware.security import get_current_user

router = APIRouter(tags=["immobile"], prefix='/immobile')

# GET method
@router.get("/", response_model=List[ImmobileSchema.Immobile])
async def get_immobiles(db: AsyncSession = Depends(get_session), current_user: UserSchema.User = Depends(get_current_user)):
    """
    Get immobiles from database.

    Parameters:
    -------
    None.

    Returns:
    -------
    immobile list.
    """
    return await ImmobileController.get_immobiles(db)

@router.get("/{immobile_id}", response_model=ImmobileSchema.Immobile)
async def get_immobile_by_id(immobile_id: int, db: AsyncSession = Depends(get_session), current_user: UserSchema.User = Depends(get_current_user)):
    """
    Get immobile from database by id.

    Parameters:
    -------
    **immobile_id** (int): Immobile id used to find the correct immobile.

    Returns:
    -------
    the immobile if it exists.
    """
    return await ImmobileController.get_immobile_by_id(db, immobile_id=immobile_id)

@router.get("/with_image/base64")
async def get_immobiles_with_image(db: AsyncSession = Depends(get_session), current_user: UserSchema.User = Depends(get_current_user)):
    """
    Get immobiles from database.

    Parameters:
    -------
    None.

    Returns:
    -------
    immobile list.
    """
    return await ImmobileController.get_immobiles_with_image(db)


# POST method
@router.post("/", response_model=ImmobileSchema.ImmobileCreate)
async def create_immobile(immobile: ImmobileSchema.ImmobileCreate, db: AsyncSession = Depends(get_session), current_user: UserSchema.User = Depends(get_current_user)):
    """
    Create new Immobile on database.

    Parameters:
    -------
    **immobile** (immobileCreate): Pydantic model with all immobile information.\n

    Returns:
    -------
    The new immobile created.
    """
    return await ImmobileController.create_immobile(db=db, immobile=immobile)


# PUT method
@router.put("/{immobile_id}", response_model=ImmobileSchema.ImmobileCreate)
async def update_user(immobile: ImmobileSchema.ImmobileCreate, immobile_id: int, db: AsyncSession = Depends(get_session), current_user: UserSchema.User = Depends(get_current_user)):
    """
    Update a immobile from database.

    Parameters:
    -------
    **immobile** (ImmobileCreate): Immobile with new informations.\n
    **immobile_id** (int): immobile id to be update.

    Returns:
    -------
    Immobile with the new information.
    """
    return await ImmobileController.update_immobile(db=db, immobile=immobile, immobile_id=immobile_id)