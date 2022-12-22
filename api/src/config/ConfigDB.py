from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

DATABASE_DIALECT = 'mysql+aiomysql'
DATABASE_USER = 'xlux8tb3hj7rp5le'
DATABASE_PASSWORD = 'rd6g587p7lckp6t2'
DATABASE_HOST = 'iu51mf0q32fkhfpl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306'
DATABASE = 'p9zfmdmvorym5zq2'

DATABASE_URL = \
    f'{DATABASE_DIALECT}://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}/{DATABASE}'

engine = create_async_engine(DATABASE_URL, echo=False)
async_session  = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

origins = [
    "*" # Temporary. Just to Test the frontend
]


Base = declarative_base()