from config_bd.db import conn
from modelos.modelo_tablas import camiseta_estampada,camiseta,estampa
from esquemas.esquemas import CamisetaEstampada
from sqlalchemy import text
def traer_camiseta_estampada():
    query = """
    SELECT camiseta_estampada.codigo_camiseta_estampada,
       camiseta_estampada.precio_camiseta_estampada,
       camiseta.codigo_camiseta,
       estampa.codigo_estampa
    FROM camiseta_estampada
    JOIN camiseta ON camiseta_estampada.codigo_camiseta = camiseta.codigo_camiseta
    JOIN estampa ON camiseta_estampada.codigo_estampa = estampa.codigo_estampa;
    """
    result = conn.execute(query)
    for n in result:
        print(n)
    return result    

def registrar_camiseta_estampada(stamp_shirt_code,stamp_shirt_price,shirt_code,stamp_code):
    
    query=text("""
    INSERT INTO camiseta_estampada(codigo_camiseta_estampada,
    precio_camiseta_estampada,codigo_camiseta,codigo_estampa)
    VALUES(
    :stamp_shirt_code,:stamp_shirt_price,:shirt_code,:stamp_code
    );
    """)
    conn.execute(query,{"stamp_shirt_code":stamp_shirt_code,
    "stamp_shirt_price":stamp_shirt_price,"shirt_code":shirt_code,"stamp_code":stamp_code})
    
