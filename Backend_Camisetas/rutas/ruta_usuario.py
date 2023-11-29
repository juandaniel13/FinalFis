from fastapi import APIRouter,Response,status
from config_bd.db import conn 
from modelos.modelo_tablas import usuario #Tabla usuario
from esquemas.esquemas import Usuario
from cryptography.fernet import Fernet # Cifrar contraseña
from starlette.status import HTTP_204_NO_CONTENT
from logica.usuarios import mostrar_usuario,registrar_usuario,buscar_usuario,eliminar_usuario,actualizar_usuario
key=Fernet.generate_key()
f=Fernet(key)

usuarios = APIRouter()


@usuarios.get("/")
def inicio():
    return "Hola Usuarios"

@usuarios.get("/usuarios/lista",response_model=list[Usuario], tags=["Usuario"])
def mostrar_usuarios():
    mostrar_info = mostrar_usuario()
    return mostrar_info

@usuarios.post("/usuarios/register",response_model=list[Usuario], tags=["Usuario"])
def registrar_usuarios( user : Usuario):
    mostrar_registro=registrar_usuario(user)
    print(mostrar_registro)
    return mostrar_registro

@usuarios.get("/usuarios/{numero_documento}",response_model=Usuario, tags=["Usuario"])
def buscar_usuarios(numero_documento:int):
    buscar=buscar_usuario(numero_documento)
    return buscar

@usuarios.delete("/usuarios/{numero_documento}",status_code=status.HTTP_204_NO_CONTENT, tags=["Usuario"])
def eliminar_usuarios(numero_documento:int):
    eliminar=eliminar_usuario(numero_documento)
    return Response(status_code=HTTP_204_NO_CONTENT)
    
@usuarios.put("/usuarios/{numero_documento}",response_model=Usuario, tags=["Usuario"])
def actualizar_usuarios(numero_documento:int , user: Usuario):
    actualizar= actualizar_usuario(numero_documento,user)
    return  actualizar   





