from config_bd.db import conn
from modelos.modelo_tablas import camiseta
from esquemas.esquemas import Camiseta

#SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=conn)

def mostrar_camiseta():
   camiseta_mostrar = conn.execute(camiseta.select()).fetchall()
   print(camiseta_mostrar)
   return camiseta_mostrar

def registrar_camiseta(shirt : Camiseta):
   nueva_camiseta = {"codigo_camiseta": shirt.codigo_camiseta ,"talla_camiseta":shirt.talla_camiseta,
   "color_camiseta": shirt.color_camiseta,"genero_camiseta":shirt.genero_camiseta}
   resultado = conn.execute(nueva_camiseta.insert().values( nueva_camiseta))
   print(resultado)
   registro =conn.execute(camiseta.select().where(camiseta.c.codigo_camiseta == resultado.lastrowid)).first()
   return registro