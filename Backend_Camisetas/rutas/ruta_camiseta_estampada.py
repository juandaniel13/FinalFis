from fastapi import APIRouter,Response,status
from config_bd.db import conn 
from modelos.modelo_tablas import camiseta_estampada,camiseta,estampa #Tabla usuario
from esquemas.esquemas import CamisetaEstampada,Camiseta,Estampa
from starlette.status import HTTP_204_NO_CONTENT


camisetas_estampadas = APIRouter()


@camisetas_estampadas.get("/camiseta_estampada", tags=["Camiseta Estampada"])
def inicio():
    return "Hola Inicio"

@camisetas_estampadas.get("/camiseta_estampada/lista",response_model=list[CamisetaEstampada], tags=["Camiseta Estampada"])
def mostrar_camiseta_estampada():
    return conn.execute(CamisetaEstampada.select()).fetchall()
#REVISAR METODO
@camisetas_estampadas.post("/camiseta_estampada/register",response_model=list[CamisetaEstampada], tags=["Camiseta Estampada"])
def registrar_camiseta_estampada( stamp_shirt : CamisetaEstampada ):
    nueva_camiseta_estampada = {"codigo_camiseta_estampada": stamp_shirt.codigo_camiseta_estampada ,"precio_camiseta_estampada":stamp_shirt.precio_camiseta_estampada,
    "codigo_camiseta":stamp_shirt.codigo_camiseta,"codigo_estampa":stamp_shirt.codigo_estampa
    }
    resultado = conn.execute(camiseta_estampada.insert().values( nueva_camiseta_estampada))
    print(resultado )
    return  conn.execute(camiseta_estampada.select().where(camiseta_estampada.c.codigo_camiseta_estampada == resultado.lastrowid)).first()