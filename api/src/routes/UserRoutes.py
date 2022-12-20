from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from ..middleware.utils_db import get_session
from ..schemas import UserSchema
from ..controllers import UserController 
from typing import List
from ..middleware.security import get_current_user

router = APIRouter(tags=["user"], prefix='/user')

# GET method
@router.get("/", response_model=List[UserSchema.User])
async def get_users(db: AsyncSession = Depends(get_session), current_user: UserSchema.User = Depends(get_current_user)):
    """
    Get users from database.

    Parameters:
    -------
    None.

    Returns:
    -------
    user list.
    """
    return await UserController.get_users(db)

@router.get("/{user_id}", response_model=UserSchema.User)
async def get_user_by_id(user_id: int, db: AsyncSession = Depends(get_session), current_user: UserSchema.User = Depends(get_current_user)):
    """
    Get user from database by id.

    Parameters:
    -------
    **user_id** (int): User id used to find the correct user.

    Returns:
    -------
    the user if it exists.
    """
    return await UserController.get_user_by_id(db, user_id=user_id)

@router.get("/username/{user_name}", response_model=UserSchema.User)
async def get_user_by_username(user_name: str, db: AsyncSession = Depends(get_session), current_user: UserSchema.User = Depends(get_current_user)):
    """
    Get user from database by usename.

    Parameters:
    -------
    **user_name** (str): Username used to find the correct user.

    Returns:
    -------
    the user if it exists.
    """
    return await UserController.get_user_by_username(db, user_name=user_name)


# POST method
@router.post("/", response_model=UserSchema.User)
async def create_user(user: UserSchema.UserCreate, db: AsyncSession = Depends(get_session)):
    """
    Create new user on database.

    Parameters:
    -------
    **user** (UserCreate): Pydantic model with all user information.\n

    Returns:
    -------
    The new user created.
    """
    return await UserController.create_user(db=db, user=user)


# PUT method
@router.put("/{user_id}", response_model=UserSchema.UserCreate)
async def update_user(user: UserSchema.UserCreate, user_id: int, db: AsyncSession = Depends(get_session), current_user: UserSchema.User = Depends(get_current_user)):
    """
    Update a user from database.

    Parameters:
    -------
    **user** (UserCreate): User with new informations.\n
    **user_id** (int): user id to be update.

    Returns:
    -------
    User with the new information.
    """
    return await UserController.update_user(db=db, user=user, user_id=user_id, current_user_id=current_user.id)