from fastapi import APIRouter,Response,status
from fastapi.responses import JSONResponse
from logica.camiseta_estampada import traer_camiseta_estampada,registrar_camiseta_estampada
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
    cam_estamp=traer_camiseta_estampada()
    return cam_estamp
   #conn.execute(camiseta_estampada.select())

@camisetas_estampadas.post("/camiseta_estampada/register", tags=["Camiseta Estampada"])
def registrar_camisetas_estampada( stamp_shirt_code, stamp_shirt_price, shirt_code, stamp_code):
    registrar_camiseta_estampada(stamp_shirt_code, stamp_shirt_price, shirt_code, stamp_code)
    data = {"mensaje": "Camiseta Estampada registrada"}
    return data
      