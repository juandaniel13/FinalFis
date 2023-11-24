import React, { useState } from 'react'
import AdminOptions from '../Components/AdminOptions/AdminOptions'
import "./css/ManageProducts.css"
import axios from "axios";
import CargarCamiseta from '../Components/CargarCamiseta/CargarCamiseta';


function ManageProducts() {
    /* const [nombre,setNombre ] = useState("");
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
    
    const $imgSelector = document.querySelector(".image-selector")
    console.log($imgSelector.value)
    const getImageFromInput = () =>{
        return 
    }
 */
    return (
    <div className="manage-products">
        <AdminOptions/>
        <div className="edit-products">
            <CargarCamiseta/>
        </div>

    </div>
  )
    }

export default ManageProducts