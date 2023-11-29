from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from rutas.ruta_usuario import usuarios
from rutas.ruta_estampa import estampax
from rutas.ruta_camiseta import camisetas
from rutas.ruta_camiseta_estampada import camisetas_estampadas 
from rutas.ruta_carrito import carritos
from rutas.ruta_cuenta import cuentas

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*']
)

#Rutas
app.include_router(usuarios)
app.include_router(estampax)
app.include_router(camisetas)
app.include_router(camisetas_estampadas)
app.include_router(carritos)
app.include_router(cuentas)