import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import "./UpdateShirt.css"
import GetProducts from '../GetProducts/GetProducts';

function UpdateShirt({product}) {

    let [nombre,setNombre ] = useState(product.nombre);
    const [silueta,setSilueta ] = useState(product.silueta);
    const [categoria,setCategoria ] = useState(product.categoria);
    const [stock,setStock ] = useState(product.stock);
    const [color,setColor ] = useState(product.color);
    const [talla, setTalla] = useState(product.talle)
    const [precio, setPrecio] = useState(product.precio)
    

    useEffect(() => {
      setNombre(product.nombre);
      setSilueta(product.silueta);
      setCategoria(product.categoria);
      setStock(product.stock);
      setColor(product.color);
      setTalla(product.talla);
      setPrecio(product.precio)
    }, [product.nombre,product.silueta, product.categoria, product.stock, product.color,product.talla,product.precio]);
    console.log("producto recibido",nombre);

    const handdleUpdateProduct = async(e)=>{

    e.preventDefault();
    try {
        const res = await axios.put(`http://localhost:3000/camisetas/${product.id}`, {
          nombre,
          silueta,
          categoria,
          stock,
          color,
          talla,
          precio

        });
  
        console.log("respuesta de axios", res);
  
        if (res.status >= 200 && res.status < 300) {
          console.log("Todo bien todo correcto");
          alert("Los datos del producto se han actualizado exitosamente")
          setNombre("")
          setSilueta("")
          setCategoria("")
          setStock("")
          setColor("")
          setTalla("")
        } else {
          console.log("Hubo un problema con la solicitud");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };
  return (
    <div className='update-shirt'>
        <GetProducts/>
         <form action="" onSubmit={handdleUpdateProduct}>
                    <div className="product-name">
                    <input type="text"placeholder="Nombre del producto:" value={nombre}  required onChange={(e)=>setNombre(e.target.value)}/>
                    </div>
                    <div className="product-img">
                    <input className="image-selector" type="file" name="" id="" required onChange={(e)=>setSilueta(e.target.value)} />
                    {/* "https://i.pinimg.com/236x/24/8e/1e/248e1e4f38522a9179f8c7b3ac3b1508.jpg" */}
                    <img src="https://i.pinimg.com/236x/24/8e/1e/248e1e4f38522a9179f8c7b3ac3b1508.jpg" /* src={$imgSelector.value} */ height={100} width={100} alt="" />
                    </div>
                    <select name="Categoría" id="" value={categoria} required onChange={(e)=>setCategoria(e.target.value)}>
                        <option value="hombre" selected >Hombre</option>
                        <option value="mujer" >Mujer</option>
                    </select>
                   <div className="size-stock-color-precio" >
                   <select name="Talla" id="" value={talla} required onChange={(e)=>setTalla(e.target.value)}>
                        <option value="S" selected>S</option>
                        <option value="M" >M</option>
                        <option value="L" >L</option>
                        <option value="XL" >XL</option>
                        <option value="XXL" >XXL</option>
                        <option value="xS" >XS</option>
                    </select>
                    <input type="number"  placeholder="stock: " value={stock}  name="" id="" required  onChange={(e)=>setStock(e.target.value)}/>
                    <input type="color" value={color} required onChange={(e)=>setColor(e.target.value)}/>
                    <input type="number" value={precio} placeholder='Precio:'required onChange={(e)=>setPrecio(e.target.value)}/>
                    
                   </div>
                   <div>
                   <input  className='btn-agregar' type="submit" value="Actualizar producto" /* onClick={console.log("camiseta creada",{
          nombre,
          silueta,
          categoria,
          stock,
          color,
          talla
        })} *//>
                   </div>


        </form>
    </div>
  )
}

export default UpdateShirt