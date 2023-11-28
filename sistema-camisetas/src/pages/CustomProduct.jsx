import React,  { useContext, useState, useEffect } from 'react'
import {ShopContext} from "../Context/ShopContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import RelativeProducts from '../Components/RelatedProducts/RelatedProducts';
import Item from '../Components/Item/Item';
import DisplayCustomProduct from '../Components/DisplayCustomProduct/DisplayCustomProduct';
import GetDesings from '../Components/GetDesings/GetDesings';
import "./css/CustomProduct.css"
import GetProducts from '../Components/GetProducts/GetProducts';

function CustomProduct() {
    const {allProducts} = useContext(ShopContext) 
    /* const { product } = props; */
    const { addToCart } = useContext(ShopContext);
    const [isAddToCartDisabled, setAddToCartDisabled] = useState(true);
    const [size, setSize] = useState("");
    const {product, setProduct} = useContext(ShopContext)
    const {desing, setDesing, } = useContext(ShopContext)

    let customProduct = {
      "nombre": product.nombre,
      "silueta": product.silueta,
      "categoria": product.categoria,
      "stock":parseFloat( product.stock),
      "color": product.color,
      "talla": product.talla,
      "precio": parseFloat(product.precio)+10000,
      "editable": false,
      "estampa": desing
    }
  
  const enableAddtoCart = () => {
    setAddToCartDisabled(false);
  };

  return (
    <div className='custom-product'>
      <DisplayCustomProduct/>
      <GetDesings/>
      <GetProducts/>
      <div className="add-to-cart">
        <button className="btn-add-to-cart" onClick={() => addToCart(product.id, customProduct.talla,customProduct)} >
            Añadir al carrito
          </button>
      </div>
       
      
    </div>
  )
}

export default CustomProduct