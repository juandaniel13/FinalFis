from config_bd.db import conn
from modelos.modelo_tablas import estampa
from esquemas.esquemas import Estampa

#SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=conn)

def mostrar_estampa():
   estampa_mostrar = conn.execute(estampa.select()).fetchall()
   print(estampa_mostrar)
   return estampa_mostrar

def registrar_estampa(stamp : Estampa):
   nueva_estampa = {"codigo_estampa": stamp.codigo_estampa ,"nombre_estampa":stamp.nombre_estampa,
   "categoria_estampa": stamp.categoria_estampa,"autor_estampa":stamp.autor_estampa,
   "imagen_estampa":stamp.imagen_estampa}
   resultado = conn.execute(estampa.insert().values( nueva_estampa))
   print(resultado)
   registro =conn.execute(estampa.select().where(estampa.c.codigo_estampa == resultado.lastrowid)).first()
   return registro

def obtener_imagenes():
   estampa1 = conn.execute(estampa.select()).fetchall()
   print(estampa1)
   return estampa1[0]["imagen_estampa"]