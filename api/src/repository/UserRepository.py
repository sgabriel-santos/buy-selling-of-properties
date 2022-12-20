from sqlalchemy.ext.asyncio import AsyncSession
from ..schemas import UserSchema
from ..models import UserModel
from sqlalchemy.future import select
from sqlalchemy import update, insert, and_

user_model = UserModel.User

# CREATE operations
async def create_user(db: AsyncSession, user: UserSchema.UserCreate):
    await db.execute(insert(user_model).values(user.__dict__))
    return user 


# READ operations
async def get_users(db: AsyncSession):
    response = await db.execute(select(user_model))
    return response.scalars().all()

async def get_user_by_id(db: AsyncSession, user_id: int):
    response = await db.execute(select(user_model).where(user_model.id == user_id))
    return response.scalars().first()

async def get_user_by_username(db: AsyncSession, user_name: str):
    response = await db.execute(select(user_model).where(user_model.username == user_name))
    return response.scalars().first()

async def get_user_by_username_and_password(db: AsyncSession, user_name: str, password: str):
    response = await db.execute(select(user_model).where(and_(user_model.username == user_name, user_model.password == password)))
    return response.scalars().first()


# UPDATE operations
async def update_user(db: AsyncSession, user: UserSchema.UserCreate, user_id: int):
    response = await db.execute(update(user_model).where(user_model.id == user_id).values(user.__dict__))
    return response