from pydantic import BaseModel

class Usuario(BaseModel):
    numero_documento:int
    tipo_documento:str
    nombre:str
    apellido:str
    email:str
    contraseña:str
    celular:str
    direccion:str

class Estampa(BaseModel):
    codigo_estampa:int
    nombre_estampa:str
    categoria_estampa:str
    autor_estampa:str
    imagen_estampa:str

class Camiseta(BaseModel):
    codigo_camiseta:int
    talla_camiseta:str
    color_camiseta:str
    genero_camiseta:str
    #imagen_estampa:str
    #stock:int


class CamisetaEstampada(BaseModel):
    codigo_camiseta_estampada:int
    precio_camiseta_estampada:int
    #talla_camiseta:str viene de tabla camiseta
    #color_camiseta:str viene de tabla camiseta
    Camiseta.codigo_camiseta:int#revisar tipo de variable
    Estampa.codigo_estampa:int#revisar tipo de variable

class Cuenta(BaseModel):
    codigo_cuenta:int
    saldo:int
    saldo:int
    
class Carrito(BaseModel):
    codigo_compra:int
    precio_camiseta_estampada:int
    cantidad_camiseta:int
    total:int
    
        
    




