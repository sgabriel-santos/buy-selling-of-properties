To test this application, follow the steps bellow:

## 1. Project Configuration

### 1.1 Installing project dependencies

- Install [Python](https://www.python.org/downloads/)

- Open cmd in the `buy_selling_of_properties\api` directory
- Create a python virtual enviroment with: `py -m venv venv`
- Open the virtual enviroment with: `venv\Scripts\activate` (on Windows)
- Install the project dependencies with: `pip install -r requirements.txt`

```sh
py -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

After that, the project is successfully configured
But, It's necessary to configure database as in the next section


### 1.2 DataBase Configuration
- Install [MariaDB](https://mariadb.org/download/?t=mariadb&o=true&p=mariadb&r=10.3.13&os=windows&cpu=x86&pkg=msi)
- After that, open the HeidiSQL application and configure with this information:
```sh
User: root
Password: 123456
Port: 3306
```
- This information can be checked in `buy_selling_of_properties\api\src\config\configDB.py`
- Create a new database in the root with the name app
- You don't need create the tables, just the database. More, in the next section

#### 1.2.2 To create database tables it's necessary perform the bellow command
- Open cmd in the `buy_selling_of_properties\api` directory again
- perform `alembic upgrade head` command 
- For more information about alembic, see the section `2.1 About Alembic`

```sh
alembic upgrade head
```

**obs:** Using this command, the database is filled with some initial data. For example, an user admin and the tables needed to build menu are created.


### 1.3 Starting the BackEnd application

To test correctly:
- Open cmd in the `buy_selling_of_properties\api` directory again
- perform this command: `uvicorn src.api:app --reload`
- The server will open on http://127.0.0.1:8000
- Open your browser at http://127.0.0.1:8000/docs
- Then, you can create, read, update or delete users (Be happy!)

```sh
uvicorn src.api:app --reload
```
### 1.4 FrontEnd

To install the FrontEnd dependencies, check the Readme in the `buy_selling_of_properties\dashboard` directory.

___

## 2. Clarification

This topic is not necessary to start the application, just to understand some technologies used.

### 2.1 About Alembic
- [Alembic](https://alembic.sqlalchemy.org/en/latest/tutorial.html) is a lightweight database migration tool for usage with the SQLAlchemy Database Toolkit for Python.
- With this tool, we can add migrations on application

### 2.2 Creating new revisions
- To create a new revision, use this command: `alembic revision -m "name revision"` 
  (replace the name_revision for the correct name, for example `create user table`)
- The revision will be created in src/migration/versions directory
- On update() and downgrade() functions, make the necessary changes

```sh
alembic revision -m "name revision"
```

### 2.3 Creating a new table
- To create a new table, add this code on upgrade() function:
```sh
op.create_table(
        'table_name',
        sa.Column('id', sa.Integer, primary_key=True),         # Create an id column of integer type as priority key and auto increment
        sa.Column('column2', sa.String(50), nullable=False),   # Create a column of type String(50), with not null
        sa.Column('column3', sa.Boolean, nullable=False),      # Create an id column of Boolean type, with not null
    )
```

- And to drop table, add this code on downgrade() function:
```sh
op.drop_table('table_name')  # Drop table
```

- To create table, follow the steps in section `1.2.2`
- And to Drop table, perform the command: `alembic downgrade base`

```sh
alembic downgrade base
```

### 2.4 Adding a new column to a table
- Create a new revision as section `2.2`
- To add a new column in a table, add this code on upgrade() funcion:
```sh
op.add_column('table_name', sa.Column('column_name', sa.String(50)))  # Adds a new column in table 'table_name'. Data type can be changed
```
    
- And to Drop Column, add this code on downgrade() function:
```sh
op.drop_column('table_name', 'column_name')  # Drop Column
```