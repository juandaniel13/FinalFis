import React, { useState, useContext, useEffect } from "react";
import "./GetProducts.css";
import Order from "../Order/Order";
import axios from "axios";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

function GetProducts() {
  const [products, setProducts] = useState([]);
  const {product, setProduct} = useContext(ShopContext)
  const [categoria,setCategoria ] = useState("men");
    const [talla, setTalla] = useState("S")

  const getProduct = (data) => {

        setProduct( data)
        console.log("el producto seleccionado fué: ", product);
  };

  const handdleProducts = async (e) => {
  /*   e.preventDefault(); */

    try {
      const res = await axios.get("http://localhost:3000/camisetas");

      console.log("respuesta de axios", res);

      if (res.status >= 200 && res.status < 300) {
        setProducts(res.data);
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
    handdleProducts()
  }, []);


  console.log("talla y categoria", talla, categoria);
  return (
    <div className="get-products">
       <div className='product-filter'>
        <select name="Categoría" id="" value={categoria} required onChange={(e)=>setCategoria(e.target.value)}>
            <option value="men" selected >Hombre</option>
            <option value="women" >Mujer</option>
            <option value="kid" >Niño</option>
        </select>
               
        <select name="Talla" id="" value={talla} required onChange={(e)=>setTalla(e.target.value)}>
            <option value="S" selected>S</option>
            <option value="M" >M</option>
            <option value="L" >L</option>
            <option value="XL" >XL</option>
            <option value="XXL" >XXL</option>
            <option value="xS" >XS</option>
        </select>
    </div>
      <div className="search-bar">
        <input type="text" />
        <button /* onClick={(e)=>{handdleProducts(e)}} */>
          🔎
        </button>
      </div>
      <div className="product-list">
        {products.map((product, i) => {
         /*  return (
            <div className="product" onClick={(e)=>{getProduct(product)}} key={product.id} >
              <img
                src= {product.silueta}
                alt=""
              />
              <div className="product-data">
                <ul>
                  <li>id: {i}</li>
                  <li>Nombre: {product.nombre}</li>
                  <li>Precio:{product.precio}</li>
                  <li>Color: {product.color}</li>
                  <li>Talla: {product.talla}</li>
                </ul>
              </div>
            </div>
          ); */
          if(product.categoria == categoria && product.talla == talla){
            return (
              <div className="product" onClick={(e)=>{getProduct(product)}} key={product.id} >
                <img
                  src= {product.silueta}
                  alt=""
                />
                <div className="product-data">
                  <ul>
                    <li>id: {i}</li>
                    <li>Nombre: {product.nombre}</li>
                    <li>Precio:{product.precio}</li>
                    <li>Color: {product.color}</li>
                    <li>Talla: {product.talla}</li>
                  </ul>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default GetProducts;
