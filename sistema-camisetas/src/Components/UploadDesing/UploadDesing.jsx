import React, { useState, useEffect } from 'react'
import "./UploadDesing.css"
import axios from "axios";

function UploadDesing() {

const [nombre, setNombre] = useState("")
const [img, setImg] = useState("")
const [categoria, setCategoria] = useState("")
const [tags, setTags] = useState([])

const handdleGetTags = async (e) => {
    /* e.preventDefault(); */

    try {
      const res = await axios.get("http://localhost:3000/tags");

      console.log("respuesta de axios", res);

      if (res.status >= 200 && res.status < 300) {
        console.log(res.data);
        setTags(res.data);
        console.log("Todo bien todo correcto");
      } else {
        console.log("Hubo un problema con la solicitud");
        // Puedes manejar errores o realizar acciones adicionales en caso de error
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Puedes manejar errores de red u otros errores aquí
    }
  };

const handdleAddDesing = async (e) =>{
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:3000/desings", {
          nombre:nombre,
          imagen:img,
          categoria:categoria,
          estado:"disponible"
        });
  
        console.log("respuesta de axios", res);
  
        if (res.status >= 200 && res.status < 300) {
          console.log("Todo bien todo correcto");
          alert("El estampado se añadió exitosamente")
          setNombre("")
        } else {
          console.log("Hubo un problema con la solicitud");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
}
useEffect(() => {
    // Este código se ejecutará después de que el componente se monte
    handdleGetTags();
   
  }, []);
  return (
    <div className='upload-desing'>
        <form action="" onSubmit={handdleAddDesing} >
            <input type="text" placeholder='Nombre del diseño' name="" id=""  onChange={(e)=>{setNombre(e.target.value)}} required/>
            
            <input className="image-selector" type="file" name="" id="" required onChange={(e)=>setImg(e.target.value)} />
                    {/* "https://i.pinimg.com/236x/24/8e/1e/248e1e4f38522a9179f8c7b3ac3b1508.jpg" */}
            <img src="https://i.pinimg.com/236x/24/8e/1e/248e1e4f38522a9179f8c7b3ac3b1508.jpg" /* src={$imgSelector.value} */ height={100} width={100} alt="" />
            <select name="categoría" id="" required onChange={(e)=>setCategoria(e.target.value)} >
                <option value="otra" selected>Otra</option>
                {tags.map((tag)=>{
                    return(
                        <option id={tag.id} value={tag.nombre}>{tag.nombre}</option>
                    )
                })}
                    
             </select>
            
            <input type="submit" value="Agregar Diseño" />
        </form>
    </div>
  )
}

export default UploadDesing