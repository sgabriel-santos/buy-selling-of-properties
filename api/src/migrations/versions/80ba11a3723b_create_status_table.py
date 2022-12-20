"""create status table

Revision ID: 80ba11a3723b
Revises: 2530be85ef8a
Create Date: 2022-12-19 23:29:47.032069

"""
from alembic import op
import sqlalchemy as sa
from src.migrations.populate_table import populate_table
from src.migrations.data_table.status_data import status_data


# revision identifiers, used by Alembic.
revision = '80ba11a3723b'
down_revision = '2530be85ef8a'
branch_labels = None
depends_on = None

table_name = 'status'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('description', sa.String(50), nullable=False)
    )

    populate_table(table_name, status_data)


def downgrade() -> None:
    op.drop_table(table_name)
