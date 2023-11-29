from fastapi import APIRouter
from config_bd.db import conn 
from modelos.modelo_tablas import carrito #Tabla carrito
from esquemas.esquemas import Carrito
from logica.carrito import traer_total
from logica.cuenta import descontar_compra

 


carritos = APIRouter()


@carritos.get("/carrito", tags=["Carrito"])
def inicio():
    return "Hola Carrito"

@carritos.get("/carrito/realizar_compra", tags=["Carrito"])
def realizar_compras(numero_documento):
    total,codigo_cuenta=traer_total(numero_documento)
    ejecucion=descontar_compra(codigo_cuenta,total)
    return ejecucion


@carritos.post("/carrito/total", tags=["Carrito"])
def calcular_total(card : Carrito):
    card.total={"total":card.cantidad_camiseta*card.precio_camiseta_estampada}
    resultado = conn.execute(carrito.insert().values(card.total))
    return resultado
