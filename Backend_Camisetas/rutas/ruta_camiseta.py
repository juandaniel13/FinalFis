from fastapi import APIRouter,Response,status,UploadFile,File
from config_bd.db import conn 
from modelos.modelo_tablas import camiseta #Tabla usuario
from esquemas.esquemas import Camiseta
from logica.camiseta import mostrar_camiseta,registrar_camiseta

camisetas = APIRouter()


@camisetas.get("/camisetas", tags=["Camiseta"])
def inicio():
    return "Hola Inicio"

@camisetas.get("/camisetas/lista",response_model=list[Camiseta], tags=["Camiseta"])
def mostrar_camisetas():
    mostrar_info=mostrar_camiseta()
    return mostrar_info  

@camisetas.post("/camisetas/register",response_model=list[Camiseta], tags=["Camiseta"])
async def registrar_camisetas( shirt : Camiseta):
    mostrar_registro=registrar_camiseta(shirt)
    print(mostrar_registro)
    return mostrar_registro
    
    
    
   