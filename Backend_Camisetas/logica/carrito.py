from config_bd.db import conn
from modelos.modelo_tablas import carrito,camiseta_estampada
from esquemas.esquemas import Carrito
from sqlalchemy import text

#(precio_camiseta * cantidad)*0.19
def calcular_total(cantidad,precio_camiseta):
    cantidad = float(cantidad)
    precio_camiseta = float(precio_camiseta)
    subtotal = (cantidad * precio_camiseta)*0.19
    total= (subtotal + (cantidad * precio_camiseta))
    return total

def traer_total(id_usuario):
    
    result = conn.execute("SELECT * FROM carrito WHERE numero_documento = %s",(id_usuario))
    result = result.fetchone()
    result2 = conn.execute("SELECT * FROM camiseta_estampada WHERE codigo_camiseta_estampada = %s",(result[3]))
    result2=result2.fetchone()
    total=calcular_total(result[1],result2[1])
    actualizar_total(total,result[0])
    print(total)
    return total,result[4]

def actualizar_total(total,codigo_compra):
    conn.execute("UPDATE carrito SET total = %s WHERE codigo_compra = %s",(total,codigo_compra))




    