from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status
from ..repository import UserRepository
from ..schemas import UserSchema

# CREATE operations
async def create_user(db: AsyncSession, user: UserSchema.UserCreate):
    db_user = await UserRepository.get_user_by_username(db, user_name=user.username)
    
    if db_user:
        raise HTTPException(status_code=409, detail="Name already registered")
    
    try:
        db_user = await UserRepository.create_user(db, user=user)
        await db.commit()
        return db_user
    except:
        await db.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Server Error")


# READ operations
async def get_users(db: AsyncSession):
    try:
        return await UserRepository.get_users(db)
    except:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Server Error")

async def get_user_by_id(db: AsyncSession, user_id: int):
    db_user = await UserRepository.get_user_by_id(db, user_id=user_id)
    if not db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not Found")
    return db_user

async def get_user_by_username(db: AsyncSession, user_name: str):
    db_user = await UserRepository.get_user_by_username(db, user_name=user_name)
    if not db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not Found")
    return db_user

async def get_user_by_username_and_password(db: AsyncSession, user_name: str, password: str):
    db_user = await UserRepository.get_user_by_username_and_password(db, user_name=user_name, password=password)
    if not db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not Found")
    return db_user


# UPDATE operations
async def update_user(db: AsyncSession, user: UserSchema.UserCreate, user_id: int, current_user_id: int):
    db_user = await UserRepository.get_user_by_id(db, user_id=user_id)
    if not db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")
    
    try:
        await UserRepository.update_user(db, user=user, user_id=user_id)
        await db.commit()
        return user
    except:
        await db.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Server Error")


# DELETE operations
async def delete_user(db: AsyncSession, user_id: int, current_user_id: int):
    db_user = await UserRepository.get_user_by_id(db, user_id=user_id)
    if not db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")

    try:
        await UserRepository.delete_user(db, user_id=user_id)
        await db.commit()
        return db_user
    except:
        await db.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Server Error")
