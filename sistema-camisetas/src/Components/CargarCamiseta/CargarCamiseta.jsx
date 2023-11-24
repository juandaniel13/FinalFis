import React from 'react'
import { useState } from 'react'
import axios from "axios";
import "./CargarCamiseta.css"

export default function CargarCamiseta() {
    const [nombre,setNombre ] = useState("");
    const [silueta,setSilueta ] = useState("");
    const [categoria,setCategoria ] = useState("");
    const [strock,setStock ] = useState(0);
    const [color,setColor ] = useState("");
    const [talla, setTalla] = useState("")
    const [precio, setPrecio] = useState(0)

    const handdleAddProduct = async(e)=>{

    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:3000/camisetas", {
          nombre,
          silueta,
          categoria,
          strock,
          color,
          talla,
          precio
          /* "codigo_camiseta":12,
          "talla_camiseta":talla,
          "color_camiseta":color,
          "genero_camiseta": categoria */

        });
  
        console.log("respuesta de axios", res);
  
        if (res.status >= 200 && res.status < 300) {
          console.log("Todo bien todo correcto");
          alert("EL producto se ha agregado exitosamente")
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
    
    /* const $imgSelector = document.querySelector(".image-selector")
    console.log($imgSelector.value) */
  
    return (

        <div className="cargar-producto">
                <form action="" onSubmit={handdleAddProduct}>
                    <div className="product-name">
                    <input type="text"placeholder="Nombre del producto" required onChange={(e)=>setNombre(e.target.value)}/>
                    </div>
                    <div className="product-img">
                    <input className="image-selector" type="file" name="" id="" required onChange={(e)=>setSilueta(e.target.value)} />
                    {/* "https://i.pinimg.com/236x/24/8e/1e/248e1e4f38522a9179f8c7b3ac3b1508.jpg" */}
                    <img src="https://i.pinimg.com/236x/24/8e/1e/248e1e4f38522a9179f8c7b3ac3b1508.jpg" /* src={$imgSelector.value} */ height={100} width={100} alt="" />
                    </div>
                    <select name="Categoría" id="" required onChange={(e)=>setCategoria(e.target.value)}>
                        <option value="hombre" selected >Hombre</option>
                        <option value="mujer" >Mujer</option>
                    </select>
                   <div className="size-stock-color-precio" >
                   <select name="Talla" id="" required onChange={(e)=>setTalla(e.target.value)}>
                        <option value="S" selected>S</option>
                        <option value="M" >M</option>
                        <option value="L" >L</option>
                        <option value="XL" >XL</option>
                        <option value="XXL" >XXL</option>
                        <option value="xS" >XS</option>
                    </select>
                    <input type="number"  placeholder="Stock:"  name="" id="" required  onChange={(e)=>setStock(e.target.value)}/>
                    <input type="color" required onChange={(e)=>setColor(e.target.value)}/>
                    <input type="number" placeholder='Precio:'required onChange={(e)=>setPrecio(e.target.value)}/>
                    
                   </div>
                   <div className="agregar-producto">
                   <input  className='btn-agregar' type="submit" value="Cargar producto" onClick={console.log("camiseta creada",{
          nombre,
          silueta,
          categoria,
          strock,
          color,
          talla
        })}/>
                   </div>


                </form>
             
    </div>
  )
}
