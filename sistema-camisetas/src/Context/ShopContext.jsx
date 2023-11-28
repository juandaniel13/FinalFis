import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const ShopContext = createContext();



const ShopContextProvider = (props) => {
  /* all products */
  const [allProducts, setAllProducts] = useState([])
  const handdleGetProducts = async (e) => {
    /* e.preventDefault(); */

    try {
      const res = await axios.get("http://localhost:3000/camisetas");

      console.log("respuesta de axios", res);

      if (res.status >= 200 && res.status < 300) {
        console.log(res.data);
        setAllProducts(res.data);
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
    handdleGetProducts()
  }, []);



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
    console.log("productos del carrito",cartItems);
  };
  

  const removeFromCart = (itemId,size) => {
    
    setCartItems((prev) => {
        const updatedCart = [...prev];
        const itemIndex = getCartItem(itemId, size);
  
       /* if( updatedCart[itemIndex].quantity == 0){ */
        if (itemIndex !== false) {
          // El artículo existe en el carrito, actualiza la cantidad
          updatedCart[itemIndex] = {
            ...updatedCart[itemIndex],
            quantity: Math.max(0, updatedCart[itemIndex].quantity - 1),
          };
        }
  /*      } */
  
        return updatedCart;
      });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartItems.forEach((el)=>{
        totalAmount  += el.product.precio * el.quantity
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

  const getTotalCartAmountFax = (fax) => {
    let totalAmount = 0;
    cartItems.forEach((el)=>{
        totalAmount  += (el.product.precio + (el.product.precio * (fax/100)) )* el.quantity
    })
    return totalAmount;
};




  const [account, setAccount] =useState({login:false,user:{}})
  const [product, setProduct] = useState({});
  const [tag, setTag] = useState({});
  const [desing, setDesing] = useState({})

  localStorage.setItem("juan", account.login)
  /* localStorage.getItem() */
  console.log("prueba xd", account);



  /* User Login */
  const [token, setToken] = useState(localStorage.getItem("awesomeLeadsToken"));


  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch("http://localhost:3000/users", requestOptions);

      if (!response.ok) {
        setToken(null);
      }
      localStorage.setItem("awesomeLeadsToken", token);
    };
    fetchUser();
  }, [token]);




  const contextValue = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    account,
    setAccount,
    product,
    setProduct,
    tag,
    setTag,
    desing,
    setDesing, 
    getTotalCartAmountFax,
    token,
    setToken,
    
    

  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
