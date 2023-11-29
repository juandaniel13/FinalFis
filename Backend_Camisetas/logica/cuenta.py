from config_bd.db import conn
from modelos.modelo_tablas import carrito,camiseta_estampada
from esquemas.esquemas import Carrito
from sqlalchemy import text


def comprobar_fondos(saldo,total):
    ejecucion=""
    if(saldo>=total):
        saldo_final=saldo-total
        ejecucion="Ejecuta la compra"
    else:
        ejecucion="No se ejecuta la compra"
        saldo_final=saldo
    return saldo_final,ejecucion
        
    
def descontar_compra(codigo_cuenta,total):
    result = conn.execute("SELECT * FROM cuenta WHERE codigo_cuenta = %s",(codigo_cuenta))
    result = result.fetchone()
    comprobacion,ejecucion=comprobar_fondos(result[1],total)
    print(comprobacion)
    actualizar_saldo(comprobacion,codigo_cuenta)
    return ejecucion
    
def actualizar_saldo(saldo_final,codigo_cuenta):
 conn.execute("UPDATE cuenta SET saldo = %s WHERE codigo_cuenta = %s",(saldo_final,codigo_cuenta))
    
    