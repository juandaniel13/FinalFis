import React, { createContext, useEffect, useState } from "react";
import { data_product as all_products } from "../Components/assets/nav_bar_media/data";

export const ShopContext = createContext();



const ShopContextProvider = (props) => {
  /* Cart */
  const [cartItems, setCartItems] = useState([]);

  const alreadyExistinCart = (itemId,size)=>{

    if(cartItems.length == 0){
        console.log("el carrito está vacio");
        return false;
    }
    for(let i = 0; i < cartItems.length; i++){
        
        if(cartItems[i].id == itemId && cartItems[i].size == size ){
            return true
        }
    }
    return false
  }
  
  const getCartItem = (itemId,size)=>{
    for(let i = 0; i < cartItems.length; i++){
        
        if(cartItems[i].id == itemId  && cartItems[i].size == size){
            return i
        }
    }
    return false

  }
  const addToCart = (itemId, size,product) => {
    if (!alreadyExistinCart(itemId, size)) {
      // Si el artículo no está en el carrito, añádelo con una cantidad inicial de 1
      setCartItems((prev) => [...prev, { id: itemId, quantity: 1, size: size, product:product }]);
    } else {
      // Si el artículo ya está en el carrito, actualiza la cantidad
      setCartItems((prev) => {
        const updatedCart = [...prev];
        const itemIndex = getCartItem(itemId, size);
  
        if (itemIndex !== false) {
          // El artículo existe en el carrito, actualiza la cantidad
          updatedCart[itemIndex] = {
            ...updatedCart[itemIndex],
            quantity: Math.max(0, updatedCart[itemIndex].quantity + 1),
          };
        }
  
        return updatedCart;
      });
    }
    console.log(cartItems);
  };
  

  const removeFromCart = (itemId,size) => {
    
    setCartItems((prev) => {
        const updatedCart = [...prev];
        const itemIndex = getCartItem(itemId, size);
  
        if (itemIndex !== false) {
          // El artículo existe en el carrito, actualiza la cantidad
          updatedCart[itemIndex] = {
            ...updatedCart[itemIndex],
            quantity: Math.max(0, updatedCart[itemIndex].quantity - 1),
          };
        }
  
        return updatedCart;
      });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartItems.forEach((el)=>{
        totalAmount  += el.product.newPrice * el.quantity
    })
    return totalAmount;
};


  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item].quantity > 0) {
        totalItem += cartItems[item].quantity;
      }
    }
    console.log(totalItem);
    return totalItem;
  };

  const [account, setAccount] =useState({login:false,user:{}})


  /* User Login */

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    account,
    setAccount,
    

  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
