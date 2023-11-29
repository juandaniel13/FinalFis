from sqlalchemy import Table,Column,Integer,String,ForeignKey
from config_bd.db import meta,engine


usuario = Table("usuario",meta,
Column("numero_documento",Integer,primary_key=True),
Column("tipo_documento",String),
Column("nombre",String),
Column("apellido",String),
Column("email",String),
Column("contraseña",String),
Column("celular",String),
Column("direccion",String)
)

estampa = Table("estampa",meta,
Column("codigo_estampa",Integer,primary_key=True),
Column("nombre_estampa",String),
Column("categoria_estampa",String),
Column("autor_estampa",String),
Column("imagen_estampa",String) 
)

camiseta =  Table("camiseta",meta,
Column("codigo_camiseta",Integer,primary_key=True),
Column("talla_camiseta",String),
Column("color_camiseta",String),
Column("genero_camiseta",String)
)

camiseta_estampada = Table("camiseta_estampada",meta,
Column("codigo_camiseta_estampada",Integer,primary_key=True),
Column("precio_camiseta_estampada",Integer),
Column("codigo_camiseta",Integer,ForeignKey('camiseta.codigo_camiseta')),
Column("codigo_estampa",Integer,ForeignKey('estampa.codigo_estampa'))

)

cuenta = Table("cuenta",meta,
Column("codigo_cuenta",Integer,primary_key=True),
Column("saldo",Integer),
Column("codigo_usuario",Integer,ForeignKey('usuario.numero_documento'))
)

carrito = Table("carrito",meta,
Column("codigo_compra",Integer,primary_key=True),
Column("cantidad_camiseta",Integer),
Column("total",Integer),
Column("codigo_camiseta_estampada",Integer,ForeignKey('camiseta_estampada.codigo_camiseta_estampada')),
Column("codigo_cuenta",Integer,ForeignKey('cuenta.codigo_cuenta')),
Column("numero_documento",Integer,ForeignKey('usuario.numero_documento'))
)

meta.create_all(engine)


