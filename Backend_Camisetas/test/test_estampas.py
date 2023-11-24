from config_bd.db import conn
from modelos.modelo_tablas import estampa #tabla
from esquemas.esquemas import Estampa

#Funcion para eliminar estampas en la base de datos por medio de su ID
def eliminar_estampa(id):
    conn.execute(estampa.delete().where(estampa.c.codigo_estampa == id))

#Test para validar la creacion de una estampa en la base de datos
def test_registrar_estampa():    
    #Creando la estampa
    nueva_estampa = {"codigo_estampa":1202312,"nombre_estampa":"Karateca","categoria_estampa":"Anime",
                     "autor_estampa":"SparkleEstampas", "imagen_estampa":"https://www.shutterstock.com/image-vector/funny-karate-training-retro-vintage-260nw-2355030429.jpg"}

    #Validamos que se halla guardado en la base de datos
    conn.execute(estampa.insert().values( nueva_estampa))
    busqueda = conn.execute(estampa.select().where(estampa.c.codigo_estampa == 1202312)).fetchone()

    codigo_estampa = 1202312

    assert codigo_estampa == busqueda["codigo_estampa"]

    #Borramos la estampa para evitar tener elementos duplicados en la base de datos
    eliminar_estampa(codigo_estampa)

#Test mostrar estampas (se valida que la cantidad de registros sean > 0)
def test_Cantidad_estampas():
    registros = conn.execute(estampa.select()).fetchall()

    num_registros = len(registros)

    assert num_registros > 0


