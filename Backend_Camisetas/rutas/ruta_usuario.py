from fastapi import APIRouter,Response,status
from config_bd.db import conn 
from modelos.modelo_tablas import usuario #Tabla usuario
from esquemas.esquemas import Usuario
from cryptography.fernet import Fernet # Cifrar contraseña
from starlette.status import HTTP_204_NO_CONTENT

key=Fernet.generate_key()
f=Fernet(key)

usuarios = APIRouter()


@usuarios.get("/")
def inicio():
    return "Hola Inicio"

@usuarios.get("/usuarios/lista",response_model=list[Usuario], tags=["Usuario"])
def mostrar_usuario():
    return conn.execute(usuario.select()).fetchall()

@usuarios.post("/usuarios/register",response_model=list[Usuario], tags=["Usuario"])
def registrar_usuario( user : Usuario):
    nuevo_usuario = {"numero_documento": user.numero_documento ,"tipo_documento":user.tipo_documento,
    "nombre": user.nombre,"apellido":user.apellido,"email":user.email,"celular":user.celular,
    "direccion":user.direccion}
    nuevo_usuario["contraseña"] = f.encrypt(user.contraseña.encode("utf-8"))
    resultado = conn.execute(usuario.insert().values( nuevo_usuario))
    print(resultado)
    return  conn.execute(usuario.select().where(usuario.c.numero_documento == resultado.lastrowid)).first()

@usuarios.get("/usuarios/{numero_documento}",response_model=Usuario, tags=["Usuario"])
def busqueda_usuario_pk(numero_documento:int):
    return  conn.execute(usuario.select().where(usuario.c.numero_documento == numero_documento )).first()

@usuarios.delete("/usuarios/{numero_documento}",status_code=status.HTTP_204_NO_CONTENT, tags=["Usuario"]) 
def eliminar_usuario(numero_documento:int):
    print("El Usuario ha sido eliminado")
    resultado =  conn.execute(usuario.delete().where(usuario.c.numero_documento == numero_documento ))
    return Response(status_code=HTTP_204_NO_CONTENT)

@usuarios.put("/usuarios/{numero_documento}",response_model=Usuario, tags=["Usuario"])
def actualizar_usuario(numero_documento:int , user: Usuario):
    conn.execute(usuario.update().values(email=user.email,celular=user.celular,contraseña=user.contraseña,
    direccion=user.direccion).where(usuario.c.numero_documento == numero_documento ))
    return "datos de usuario actualizados"




