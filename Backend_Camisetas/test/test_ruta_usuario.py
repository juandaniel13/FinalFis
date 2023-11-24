import pytest
from main import app
from fastapi import APIRouter,Response
from config_bd.db import conn
from modelos.modelo_tablas import usuario #tabla
from esquemas.esquemas import Usuario 
from cryptography.fernet import Fernet # Cifrar contraseña

def client():
    #Configurando un cliente de prueba
    app.config['TESTING'] = True
    client = app.test_client()
    yield client

def test_mi_controlador(client):
    response = client.get('/usuarios')
    assert len(response) > 0


    
