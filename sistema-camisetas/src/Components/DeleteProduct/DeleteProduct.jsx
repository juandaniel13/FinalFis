import React from "react";
import "./DeleteProduct.css";
import axios from "axios";
import GetProducts from "../GetProducts/GetProducts";

function DeleteProduct({product}) {

  console.log("producto a eliminar", product);

  const handdleDeleteProduct = async (e)=>{
    e.preventDefault();
    try {
        const res = await axios.delete(`http://localhost:3000/camisetas/${product.id}`);
  
        console.log("respuesta de axios", res);
  
        if (res.status >= 200 && res.status < 300) {
          console.log("Todo bien todo correcto");
          alert("Se ha eliminado el producto exitosamente")
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
  }
  return (
    <div className="delete-product">
        <GetProducts/>
      <form action="" onSubmit={handdleDeleteProduct}>
        <div>
          <input
            className="btn-agregar"
            type="submit"
            value="Eliminar producto"
          />
        </div>
      </form>
    </div>
  );
}

export default DeleteProduct;
