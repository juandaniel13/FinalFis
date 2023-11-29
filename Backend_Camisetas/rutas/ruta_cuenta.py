from fastapi import APIRouter
from logica.cuenta import comprobar_fondos,descontar_compra
from config_bd.db import conn 
from modelos.modelo_tablas import camiseta #Tabla usuario
from esquemas.esquemas import Camiseta

cuentas = APIRouter()

@cuentas.get("/cuenta", tags=["Cuenta"])
def inicio():
    return "Hola Cuenta"

@cuentas.get("/cuenta/revision_fondos", tags=["Cuenta"])
def descontar_compras(codigo_cuenta):
    saldo_final=descontar_compra(codigo_cuenta)
    return saldo_final
   #conn.execute(camiseta_estampada.select())