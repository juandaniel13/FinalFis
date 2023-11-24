from sqlalchemy import select
from sqlalchemy.orm import sessionmaker
from config_bd.db import conn
from modelos.modelo_tablas import estampa


#SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=conn)

def obtener_imagenes():
   estampa1 = conn.execute(estampa.select()).fetchall()
   print(estampa1)
   return estampa1[4]["imagen_estampa"]