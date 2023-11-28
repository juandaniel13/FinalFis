import React, { useState, useContext }  from 'react'
import "./UploadTag.css"
import axios from "axios";
import { ShopContext } from "../../Context/ShopContext";

function UpLoadTag() {

const [nombre, setNombre] = useState("")

    
    const handdleAddTag = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/tags", {
              nombre,
            });
      
            console.log("respuesta de axios", res);
      
            if (res.status >= 200 && res.status < 300) {
              console.log("Todo bien todo correcto");
              alert("La categoría se añadió exitosamente")
              setNombre("")
            } else {
              console.log("Hubo un problema con la solicitud");
            }
          } catch (error) {
            console.error("Error en la solicitud:", error);
          }
    }

  return (
    <div className='upload-tag'>
        <form action="" onSubmit={handdleAddTag} >
            <input type="text" placeholder='Nombre de la categoría' name="" id=""  onChange={(e)=>{setNombre(e.target.value)}} required/>
            <input type="submit" value="Agregar categortía" />
        </form>
    </div>
  )
}

export default UpLoadTag