import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

function CartItems() {
  const { all_products, cartItems, removeFromCart,getTotalCartAmount ,account } = useContext(ShopContext);

  const handdlePay =()=>{
    if(account.login == false){
      alert("Primero debe iniciar sesión")
    }
    else{
      alert("por el momento, la opción de compra no está habilitada")
    }
  }

  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Productos</p>
        <p>Tiulo</p>
        <p>Precio</p>
        <p>Cantidad</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {cartItems.map((el) => {
        console.log("prueba",el);
       if (el.id > 0) { 
          return (
            <div>
              <div className="cart-items-format cart-items-format-main">
                {/*                 <img  className="cart-icon-product-icon" src="" alt="" /> */}
               <img  className="cart-icon-product-icon" src={el.product.image} alt="" />
                <p>{el.product.name}</p>
                <p>${el.product.newPrice}</p>
                <button className="cart-items-quantity">{el.quantity}</button>
                <p>${el.product.newPrice*el.quantity}</p>
                {/* insert image */}
                <span className="cart-items-remove-icon" onClick={() => {removeFromCart(el.id,el.size);}}>✖</span>
              </div>
              <hr />
            </div>
          );
          }
          return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
            <h2>Monto total:</h2>
            <div>
                {/* <div className="cart-items-total items">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-items-total-item">
                    <p>Descuento de compra</p>
                    <p>Gratis</p>
                </div>
                <hr /> */}
                <div className="cart-items-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button onClick={handdlePay}>Realizar Pago</button>
        </div>
        <div className="cart-items-promocode">
            <p>Si tienees un cupón de descuento ingresalo aquí</p>
            <div className="cart-items-prombox">
                <input type="text" placeholder="promo code"/>
                <button>Enviar</button>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default CartItems;
