import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [isAddToCartDisabled, setAddToCartDisabled] = useState(true);
  const [size, setSize] = useState("");

  const enableAddtoCart = () => {
    setAddToCartDisabled(false);
  };
  const selectSize = (size)=>{
   
    /* e.classList.add("size-selected") */
  }

 

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img className="product-display-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h2>{product.name}</h2>
        {<div className="product-display-right-stars">
          {/* imágenes */}{/* ✔ ✔ ✔ ✖ ✖<p>{112}</p> */}
        </div>}
        <div className="product-display-right-prices">
            {/* <div className="product-display-right-price-old">${product.oldPrice}</div> */}
            <div className="product-display-right-price-new">{`$ ${product.newPrice}.000`}</div>

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
        {/* <div className="product-display-right-amount"> 
          
          <button onClick={deleteProduct}>-</button><span>{amount}</span><button onClick={addProduct}>+</button>
        </div> */}
         <button className="add-to-cart" onClick={() => addToCart(product.id, size,product)} disabled={isAddToCartDisabled}>
          Añadir al carrito
        </button>
        {/* <p className="productd-isplay-right-caregory"><span>Etiquetas: <span>women, T-shirt, Cop Top</span></span></p>
        <p className="product-display-right-caregory"><span>Etiquetas : <span>women, T-shirt, Cop Top</span></span></p>
        <p className="product-display-right-caregory"><span>Etiquetas : <span>women, T-shirt, Cop Top</span></span></p>
 */}
      </div>
    </div>
  );
}

export default ProductDisplay;
