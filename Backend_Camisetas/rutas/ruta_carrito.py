from fastapi import APIRouter
from config_bd.db import conn 
from modelos.modelo_tablas import carrito #Tabla carrito
from esquemas.esquemas import Carrito


carritos = APIRouter()


@carritos.get("/carrito", tags=["Carrito"])
def inicio():
    return "Hola Carrito"

@carritos.post("/carrito/total", tags=["Carrito"])
def calcular_total(card : Carrito):
    card.total={"total":card.cantidad_camiseta*card.precio_camiseta_estampada}
    resultado = conn.execute(carrito.insert().values(card.total))
    return resultado
