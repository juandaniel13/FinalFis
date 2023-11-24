from sqlalchemy import create_engine,MetaData

DATABASE_URL = "postgresql://postgres:juan123@localhost:5432/Camisetax"

engine=create_engine(DATABASE_URL)

conn=engine.connect()

meta = MetaData()

