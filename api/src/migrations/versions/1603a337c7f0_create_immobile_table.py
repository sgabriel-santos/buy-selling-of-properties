"""create immobile table

Revision ID: 1603a337c7f0
Revises: 80ba11a3723b
Create Date: 2022-12-19 23:40:13.236546

"""
from alembic import op
import sqlalchemy as sa
from src.migrations.populate_table import populate_table
from src.migrations.data_table.immobile_data import immobile_data


# revision identifiers, used by Alembic.
revision = '1603a337c7f0'
down_revision = '80ba11a3723b'
branch_labels = None
depends_on = None

table_name = 'immobile'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('id_user', sa.Integer, sa.ForeignKey('user.id'), nullable=False),
        sa.Column('id_status', sa.Integer, sa.ForeignKey('status.id'), nullable=False),
        sa.Column('title', sa.String(500), nullable=False),
        sa.Column('description', sa.String(5000)),
        sa.Column('price', sa.String(50), nullable=False),
        sa.Column('datetime', sa.TIMESTAMP, nullable=False, server_default=sa.func.now()),
        sa.Column('localization', sa.String(500))
    )

    populate_table(table_name, immobile_data)


def downgrade() -> None:
    op.drop_table(table_name)