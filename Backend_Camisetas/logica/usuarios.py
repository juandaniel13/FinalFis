from config_bd.db import conn
from modelos.modelo_tablas import usuario
from esquemas.esquemas import Usuario
from cryptography.fernet import Fernet # Cifrar contraseña

key=Fernet.generate_key()
f=Fernet(key)

def mostrar_usuario():
  usuario_mostrar = conn.execute(usuario.select()).fetchall()
  print(usuario_mostrar)
  return usuario_mostrar

def registrar_usuario( user : Usuario):
    nuevo_usuario = {"numero_documento": user.numero_documento ,"tipo_documento":user.tipo_documento,
    "nombre": user.nombre,"apellido":user.apellido,"email":user.email,"celular":user.celular,
    "direccion":user.direccion}
    nuevo_usuario["contraseña"] = f.encrypt(user.contraseña.encode("utf-8"))
    resultado = conn.execute(usuario.insert().values( nuevo_usuario))
    print(resultado)
    registro = conn.execute(usuario.select().where(usuario.c.numero_documento == resultado.lastrowid)).first()
    print("Usuario registrado")
    return registro

def buscar_usuario(numero_documento:int):
  busqueda=conn.execute(usuario.select().where(usuario.c.numero_documento == numero_documento )).first()
  return busqueda

def eliminar_usuario(numero_documento:int):
    eliminar=conn.execute(usuario.delete().where(usuario.c.numero_documento == numero_documento ))
    print("Usuario Eliminado")
    return eliminar

def actualizar_usuario(numero_documento:int , user: Usuario):
    actualizar= conn.execute(usuario.update().values(email=user.email,celular=user.celular,contraseña=user.contraseña,
    direccion=user.direccion).where(usuario.c.numero_documento == numero_documento ))
    print("datos de usuario actualizados" )
    return actualizar

