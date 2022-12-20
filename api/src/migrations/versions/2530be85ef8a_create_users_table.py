"""create user table

Revision ID: 2530be85ef8a
Revises: 
Create Date: 2022-06-10 10:21:28.040523

"""
from alembic import op
import sqlalchemy as sa
from src.migrations.populate_table import populate_table
from src.migrations.data_table.user_data import user_data


# revision identifiers, used by Alembic.
revision = '2530be85ef8a'
down_revision = None
branch_labels = None
depends_on = None

table_name = 'user'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(50), nullable=False),
        sa.Column('username', sa.String(50), nullable=False),
        sa.Column('password', sa.String(50), nullable=False)
    )

    populate_table(table_name, user_data)


def downgrade() -> None:
    op.drop_table(table_name)
