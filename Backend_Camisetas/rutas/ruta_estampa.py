from fastapi import APIRouter
from fastapi.responses import FileResponse
from esquemas.esquemas import Estampa
from logica.estampas import  obtener_imagenes,mostrar_estampa,registrar_estampa


estampax = APIRouter()


@estampax.get("/estampas", tags=["Estampa"])
def inicio():
    return "Hola Estampas"

@estampax.get("/estampas/lista",response_model=list[Estampa],tags=["Estampa"])
async def mostrar_estampas():
    mostrar_info=mostrar_estampa()
    return mostrar_info

@estampax.post("/estampas/register",response_model=list[Estampa], tags=["Estampa"])
async def registrar_estampas( stamp : Estampa):
    mostrar_registro=registrar_estampa(stamp)
    print(mostrar_registro)
    return mostrar_registro

@estampax.get("/imagenes",tags=["Estampa"])
async def traer_imagen():
    imagen = obtener_imagenes() 
    return FileResponse (imagen)
