import React,  { useState, useContext, useEffect } from "react";
import "./EditTags.css";
import axios from "axios";
import { ShopContext } from "../../Context/ShopContext";
import UpLoadTag from "../UpLoadTag/UpLoadTag";

function EditTags() {
  const [tags, setTags] = useState([]);
  const [ tag, setTag] = useState({})


  const getTag = (tag) => {
    setTag(tag)
    console.log("categoria escogida", tag);
  };

  const handdleTags = async (e) => {
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
  
  const handdleDeleteTags =async(e) =>{
    e.preventDefault();
    console.log("id de la etiqueta a eliminar", tag.id);

    try {
      const res = await axios.delete(`http://localhost:3000/tags/${tag.id}`);

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

  const handdleUpdateTags = async(e)=>{
    e.preventDefault();

    try {
      const res = await axios.put(`http://localhost:3000/tags/${tag.id}`,{
        nombre:tag.nombre
      });

      console.log("respuesta de axios", res);

      if (res.status >= 200 && res.status < 300) {
        setTag(res.data);
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

  
  const $tag = document.querySelector(".tag");
  const $tagNombre = document.querySelector(".tag-nombre");
  const $upDateTag = document.querySelector(".update-tag");
  const $saveTag = document.querySelector(".save-tag");
  /* $tag.addEventListener("click",(e)=>{
    if(e.target == $upDateTag){
      $tagNombre.setAttribute("disabled", "false")
    }else{
      $tagNombre.setAttribute("disabled", "true")
    }
  })
   */

  useEffect(() => {
    // Este código se ejecutará después de que el componente se monte
    handdleTags();
  }, []);

  return <div className="get-tags">
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
      <div className="tags-list">
        {tags.map((tag, i) => {
          return (
            /* (e)=>{getTag(tags,i)} */
            <div className="tag" onClick={(e)=>{getTag(tag)}} key={tag.id}>
              {/* <img
                src= {product.silueta}
                alt=""
              /> */}
              <div className="tag-data">
                <ul>
                  <div className="tag-info">
                  <li>id: {tag.id}</li>
                  <input className="tag-nombre" type="text" placeholder={tag.nombre} onChange={(e)=>{setTag({...tag, nombre:e.target.value})}} /* disabled={true} *//>
                  </div>
                  <div className="edit-tag">
                  <li className="update-tag" onClick>✏️</li>
                  <li onClick={(e)=>{handdleUpdateTags(e)}} className="save-tag">Actualizar</li>
                  <li onClick={handdleDeleteTags}>❌</li>
                  </div>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
  </div>;
}

export default EditTags;
