import React, { useState, useContext, useEffect }  from 'react'
import "./GetDesings.css"
import axios from "axios";
import { ShopContext } from "../../Context/ShopContext";
function GetDesings() {
    const [desings, setDesings] = useState([]);
    const {desing, setDesing, } = useContext(ShopContext)
    const [tags, setTags] = useState([])
    const [categoria, setCategoria] = useState("otra")

    const getDesing = (desing) => {
        setDesing(desing)
        console.log("Diseño escogido", desing);
      };
    
      const handdleGetDeings = async (e) => {
        /* e.preventDefault(); */
    
        try {
          const res = await axios.get("http://localhost:3000/desings");
    
          console.log("respuesta de axios", res);
    
          if (res.status >= 200 && res.status < 300) {
            console.log(res.data);
            setDesings(res.data);
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

      useEffect(() => {
        // Este código se ejecutará después de que el componente se monte
        handdleGetDeings()
        handdleGetTags();
      }, []);

  

  return (
    <div className='get-desings'>
        <div className="search-bar">
        <input type="text" />
        <button
          /* onClick={(e) => {
            handdleTags(e);
          }} */
        >
          🔎
        </button>
      </div>
      <select name="categoría" id="" required onChange={(e)=>setCategoria(e.target.value)} >
                <option value="otra" selected>otra</option>
                {tags.map((tag)=>{
                    return(
                        <option id={tag.id} value={tag.nombre}>{tag.nombre}</option>
                    )
                })}
                    
      </select>
      <div className="desings-list">
        {desings.map((desing, i) => {
          if(desing.categoria == categoria ){
            return (
            
              <div className="desing" onClick={(e)=>{getDesing(desing)}} key={desing.id}>
                {<img
                  src= {desing.imagen}
                  alt=""
                />}
                <div className="desing-data">
                  <ul>
                    <div className="desing-info">
                    <li>id: {desing.id}</li>
                    <input className="desing-nombre" type="text" placeholder={desing.nombre} onChange={(e)=>{setDesing({...desing, nombre:e.target.value})}} /* disabled={true} *//>
                    </div>
                    <div className="desing-desing">
                    </div>
                  </ul>
                </div>
              </div>
            );
          }
        })}
      </div>

    </div>
  )
}

export default GetDesings