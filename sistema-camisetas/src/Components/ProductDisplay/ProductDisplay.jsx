import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay(props) {
  
  let { product } = props;

  console.log("este es el producto", product);
  /* let product = localStorage.getItem("selectedShirt") */
  const { addToCart } = useContext(ShopContext);
  const [isAddToCartDisabled, setAddToCartDisabled] = useState(true);
  const [size, setSize] = useState("");


  /* localStorage.setItem("selectedShirt", product) */

/*   useEffect(()=>{
      product = localStorage.getItem("selectedShirt")
  },[])
 */

  const enableAddtoCart = () => {
    setAddToCartDisabled(false);
  };

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
      {/*     <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" /> */}
        </div>
        <div className="product-display-img">
          <img className="product-display-main-img" id="product-display-main-img" src={product.silueta} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h2>{product.nombre}</h2>

        <div className="product-display-right-prices">
            <div className="product-display-right-price-new">{`$ ${product.precio}.000`}</div>

        </div>
        <div className="product-display-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex, hic minus odit porro dicta magnam. Molestiae eum quo corporis quos debitis, at et, fugit obcaecati dolorem similique voluptatibus natus.
        </div>
        <div className="product-display-right-size">
            <h2>Seleccionar tamaño</h2>
            <div className="product-display-right-sizes">
                <div value="S" onClick={(e)=>{
                enableAddtoCart()
            
                setSize("S") }}>S</div>
                <div value="M" onClick={(e)=>{
                enableAddtoCart()
                
                setSize("M") }}>M</div>
                <div value="L" onClick={(e)=>{
                enableAddtoCart()
               
                setSize("L") }}>L</div>
                <div value="XL"onClick={(e)=>{
                enableAddtoCart()
                
                setSize("XL") }}>XL</div>
                <div value="XL" onClick={(e)=>{
                enableAddtoCart()
                
                setSize("XXl") }}>XXL</div>
            </div>
        </div>
         <button className="add-to-cart" onClick={() => addToCart(product.id, size,product)} disabled={isAddToCartDisabled}>
          Añadir al carrito
        </button>

      </div>
    </div>
  );
}

export default ProductDisplay;
