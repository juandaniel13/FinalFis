from fastapi import APIRouter,Response,status,UploadFile,File
from config_bd.db import conn 
from modelos.modelo_tablas import camiseta #Tabla usuario
from esquemas.esquemas import Camiseta

camisetas = APIRouter()


@camisetas.get("/camisetas", tags=["Camiseta"])
def inicio():
    return "Hola Inicio"

@camisetas.get("/camisetas/lista",response_model=list[Camiseta], tags=["Camiseta"])
def mostrar_camiseta():
    return conn.execute(camiseta.select()).fetchall()

@camisetas.post("/camisetas/register",response_model=list[Camiseta], tags=["Camiseta"])
async def registrar_camiseta( shirt : Camiseta):
    nueva_camiseta = {"codigo_camiseta": shirt.codigo_camiseta ,"talla_camiseta":shirt.talla_camiseta,
    "color_camiseta": shirt.color_camiseta,"genero_camiseta":shirt.genero_camiseta}
    resultado = conn.execute(camiseta.insert().values(nueva_camiseta))
    print(resultado)
    return conn.execute(camiseta.select().where(camiseta.c.codigo_camiseta == resultado.lastrowid)).first()