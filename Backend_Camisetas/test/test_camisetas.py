from config_bd.db import conn, meta
from modelos.modelo_tablas import camiseta #tabla
from esquemas.esquemas import Camiseta


#Funcion para eliminar una camiseta en la base de datos por medio de un ID
def eliminar_camiseta(id):
    conn.execute(camiseta.delete().where(camiseta.c.codigo_camiseta == id))


#Test para validar la creacion de una camiseta en la base de datos
def test_registrar_camiseta():    
    #Creando la camiseta
    nueva_camiseta = {"codigo_camiseta": 2325232 ,"talla_camiseta": "L",
    "color_camiseta": "Amarillo","genero_camiseta":"Unisex"}

    #Creamos una camiseta y validamos que se halla guardado en la base de datos
    conn.execute(camiseta.insert().values(nueva_camiseta))
    busqueda = conn.execute(camiseta.select().where(camiseta.c.codigo_camiseta == 2325232)).fetchone()

    camiseta_id = 2325232
    camiseta_color = "Amarillo"

    assert camiseta_id == busqueda["codigo_camiseta"]
    assert camiseta_color == busqueda["color_camiseta"]

    #Borramos la camiseta para evitar tener elementos duplicados en la base de datos
    eliminar_camiseta(camiseta_id)

#Test mostrar usuarios (se valida que la cantidad de registros sean > 0)
def test_Cantidad_camisetas():
    registros = conn.execute(camiseta.select()).fetchall()
    num_registros = len(registros)
    assert num_registros > 0
