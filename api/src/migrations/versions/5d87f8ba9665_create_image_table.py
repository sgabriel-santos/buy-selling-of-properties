"""create image table

Revision ID: 5d87f8ba9665
Revises: 1603a337c7f0
Create Date: 2022-12-28 19:10:50.833469

"""
from alembic import op
import sqlalchemy as sa
from src.migrations.populate_table import populate_table
from src.migrations.data_table.image_data import image_data


# revision identifiers, used by Alembic.
revision = '5d87f8ba9665'
down_revision = '1603a337c7f0'
branch_labels = None
depends_on = None

table_name = 'image'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('id_immobile', sa.Integer, sa.ForeignKey('immobile.id'), nullable=False),
        sa.Column('base64', sa.Text(4294000000), nullable=False),
    )

    populate_table(table_name, image_data)


def downgrade() -> None:
    op.drop_table(table_name)
