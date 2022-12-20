from alembic import op
from sqlalchemy import MetaData, Table

def populate_table(table_name, data):
    meta = MetaData(bind=op.get_bind())
    meta.reflect(only=(table_name,))
    table = Table(table_name, meta)
    op.bulk_insert(table, data)