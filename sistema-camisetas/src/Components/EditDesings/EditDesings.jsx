import React,{ useState, useContext, useEffect } from 'react'
import "./EditDesings.css"
import axios from "axios";
import { ShopContext } from "../../Context/ShopContext";

function EditDesings() {
  const [desings, setDesings] = useState([]);
  const [ desing, setDesing] = useState({})

  const getDesing = (desing) => {
    setDesing(desing)
    console.log("Diseño escogido", desing);
  };

  const handdleDeings = async (e) => {
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
  
  const handdleDeleteDesings =async(e) =>{
    e.preventDefault();
    console.log("id del diseño a eliminar", desing.id);

    try {
      const res = await axios.delete(`http://localhost:3000/desings/${desing.id}`);

      console.log("respuesta de axios", res);

      if (res.status >= 200 && res.status < 300) {
        /* setTag(res.data); */
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

  const handdleUpdateDesings = async(e)=>{
    e.preventDefault();

    try {
      const res = await axios.put(`http://localhost:3000/desings/${desing.id}`,{
        nombre:desing.nombre,
        imagen:desing.imagen,
        categoria: desing.categoria,
        estado: "disponible"
      });

      console.log("respuesta de axios", res);

      if (res.status >= 200 && res.status < 300) {
        setDesing(res.data);
        console.log("Todo bien todo correcto");
      } else {
        console.log("Hubo un problema con la solicitud");
        // Puedes manejar errores o realizar acciones adicionales en caso de error
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Puedes manejar errores de red u otros errores aquí
    }
  }

  useEffect(() => {
    // Este código se ejecutará después de que el componente se monte
    handdleDeings()
  }, []);
  return (
    <div className='edit-desings'>
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
      <div className="desings-list">
        {desings.map((desing, i) => {
          return (
            /* (e)=>{getTag(tags,i)} */
            <div className="desing" onClick={(e)=>{getDesing(desing)}} key={desing.id}>
              {/* <img
                src= {product.silueta}
                alt=""
              /> */}
              <div className="desing-data">
                <ul>
                  <div className="desing-info">
                  <li>id: {desing.id}</li>
                  <input className="desing-nombre" type="text" placeholder={desing.nombre} onChange={(e)=>{setDesing({...desing, nombre:e.target.value})}} /* disabled={true} *//>
                  </div>
                  <div className="desing-desing">
                  <li className="update-desing" onClick>✏️</li>
                  <li onClick={(e)=>{handdleUpdateDesings(e)}} className="save-desing">Actualizar</li>
                  <li onClick={handdleDeleteDesings}>❌</li>
                  </div>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default EditDesings