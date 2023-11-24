import pytest
from config_bd.db import conn, meta
from modelos.modelo_tablas import usuario #tabla
from esquemas.esquemas import Usuario
from cryptography.fernet import Fernet # Cifrar contraseña

key=Fernet.generate_key()
f=Fernet(key)

#Funcion para eliminar un usuario en la base de datos por medio de un ID
def eliminar_usuario(numero_documento):
    conn.execute(usuario.delete().where(usuario.c.numero_documento == numero_documento ))


#Test para encontrar toda la info de un usuario por medio de su ID
def test_mostrar_usuario():
    #Buscando usuario en la base de datos
    lista_resultado = conn.execute(usuario.select().where(usuario.c.numero_documento == 100)).fetchone()
    
    documento_esperado = 100
    tipo_d_esperado = "string" 
    nombre_esperado = "string" 
    apellido_esperado = "string" 
    email_esperado = "string"
    contraseña_esperada = "x674141414141426c512d4348485649736a55326557574b6d466e344d346a4972455750776571674637376830673937537a4850684b6f766173745a664c68305a4b6a545756546b47416d2d79566342693630484b5477322d76594555477379564d773d3d"
    
    assert documento_esperado == lista_resultado["numero_documento"]
    assert tipo_d_esperado == lista_resultado["tipo_documento"]
    assert nombre_esperado == lista_resultado["nombre"]
    assert apellido_esperado == lista_resultado["apellido"]
    assert email_esperado == lista_resultado["email"]
    assert contraseña_esperada == lista_resultado["contraseña"]


#Test para validar la creacion de un usuario en la base de datos
def test_registrar_usuario():    
    #Creando el usuario
    nuevo_usuario = {"numero_documento": 1000697858 ,"tipo_documento": "c.c",
    "nombre": "Jonathan Alberto","apellido":"Ramirez Castro","email": "albertocastro@gmail.com","celular": "3154689742",
    "direccion": "Calle falsa 24 Carrera falsa 45", "contraseña": f.encrypt("12345".encode("utf-8"))}

    #Creamos un usuario y validamos que se halla guardado en la base de datos
    conn.execute(usuario.insert().values(nuevo_usuario))
    busqueda = conn.execute(usuario.select().where(usuario.c.numero_documento == 1000697858)).fetchone()

    usuario_id = 1000697858
    usuario_nombre = "Jonathan Alberto"

    assert usuario_id == busqueda["numero_documento"]
    assert usuario_nombre == busqueda["nombre"]

    #Borramos el usuario para evitar tener elementos duplicados en la base de datos
    eliminar_usuario(usuario_id)

#Test mostrar usuarios (se valida que la cantidad de registros sean > 0)
def test_Cantidad_usuarios():
    registros = conn.execute(usuario.select()).fetchall()

    num_registros = len(registros)

    assert num_registros > 0

def test_update_usuario():    
    #Creando el usuario
    nuevo_usuario = {"numero_documento": 1010697558 ,"tipo_documento": "c.c",
    "nombre": "Yeli Marcela","apellido":"Londoño Diaz","email": "albertocastro@gmail.com","celular": "3207172345",
    "direccion": "Calle falsa 54 Carrera falsa 15", "contraseña": f.encrypt("1234512345".encode("utf-8"))}

    #Creamos un usuario
    conn.execute(usuario.insert().values(nuevo_usuario))
    usuario_id = 1010697558

    #Actualizamos la informacion
    user_email_update = "yelimarcela@gmail.com"
    user_celular_update = "3104069155"
    conn.execute(usuario.update().values(email=user_email_update,celular=user_celular_update)
        .where(usuario.c.numero_documento == usuario_id))
    
    #Traemos el usuario actualizado de la base de datos
    busqueda = conn.execute(usuario.select().where(usuario.c.numero_documento == 1010697558)).fetchone()

    usuario_celular = "3104069155"
    usuario_email = "yelimarcela@gmail.com"

    assert usuario_celular == busqueda["celular"]
    assert usuario_email == busqueda["email"]

    #Borramos el usuario para evitar tener elementos duplicados en la base de datos
    eliminar_usuario(usuario_id)



def test_eliminar_usuario():
    #Creando el usuario
    nuevo_usuario = {"numero_documento": 500 ,"tipo_documento": "c.c",
    "nombre": "Dan Man","apellido":"Perez Martinez","email": "albo@gmail.com","celular": "3214589746",
    "direccion": "Calle 21 cra 15", "contraseña": f.encrypt("123789".encode("utf-8"))}
    #Creamos un usuario en la base de datos
    conn.execute(usuario.insert().values(nuevo_usuario))
    
    #Elimnimaos el usuario de la Bd

    conn.execute(usuario.delete().where(usuario.c.numero_documento == 500))
    busqueda = conn.execute(usuario.select().where(usuario.c.numero_documento == 500)).fetchone()
    assert busqueda == None
