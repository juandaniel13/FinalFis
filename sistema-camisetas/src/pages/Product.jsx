import React, { useContext } from 'react'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import {ShopContext} from "../Context/ShopContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import "./css/Product.css"


function Product() {

  const {allProducts} = useContext(ShopContext);
  let {productId} = useParams();
  productId = Number(productId)
  

 const product = allProducts.find((el) => el.id == productId); 
console.log("producto seleccionado", product);
  return (
    <div className='product' id ='product'>
      {/* <Breadcrum product={product}/> */}
      <ProductDisplay product ={product}/>
    {/*   <DescriptionBox/>
      <RelatedProducts/> */}
    </div>
  )
}

export default Product