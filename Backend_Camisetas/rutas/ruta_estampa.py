from fastapi import APIRouter
from fastapi.responses import FileResponse
from config_bd.db import conn 
from modelos.modelo_tablas import estampa #Tabla usuario
from esquemas.esquemas import Estampa
from logica.estampas import  obtener_imagenes


estampax = APIRouter()


@estampax.get("/estampas", tags=["Estampa"])
def inicio():
    return "Hola Inicio"

@estampax.get("/estampas/lista",response_model=list[Estampa],tags=["Estampa"])
def mostrar_estampa():
    return conn.execute(estampa.select()).fetchall()

@estampax.post("/estampas/register",response_model=list[Estampa], tags=["Estampa"])
def registrar_estampa( stamp : Estampa):
    nueva_estampa = {"codigo_estampa": stamp.codigo_estampa ,"nombre_estampa":stamp.nombre_estampa,
    "categoria_estampa": stamp.categoria_estampa,"autor_estampa":stamp.autor_estampa,
    "imagen_estampa":stamp.imagen_estampa}
    resultado = conn.execute(estampa.insert().values( nueva_estampa))
    print(resultado)
    return conn.execute(estampa.select().where(estampa.c.codigo_estampa == resultado.lastrowid)).first()

#EJEMPLO
@estampax.get("/imagenes",tags=["Estampa"])
async def traer_imagen():
    imagen = obtener_imagenes() 
    return FileResponse (imagen)
