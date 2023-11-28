import React, { useContext } from 'react'
import "./DisplayCustomProduct.css"
import { ShopContext } from '../../Context/ShopContext'
function DisplayCustomProduct() {
    const {product, desing} = useContext(ShopContext)
    console.log("esta es la imagen del sieño escogido", desing.imagen);
  return (
    <div className='display-custom-product'>
        <div className='product-img' style={{backgroundImage:`url(${product.silueta})`}}>
            <img src={desing.imagen} alt="" className='desing-img' />
        </div>
    </div>
  )
}

export default DisplayCustomProduct