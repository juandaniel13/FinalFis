import React, { useContext } from 'react'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import {ShopContext} from "../Context/ShopContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

function Product() {

  const {all_products} = useContext(ShopContext);
  let {productId} = useParams();
  productId = Number(productId)

 const product = all_products.find((el) => el.id === productId); 

  return (
    <div className='product'>
      <Breadcrum product={product}/>
      <ProductDisplay product ={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product