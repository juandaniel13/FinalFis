import React, { useState, useContext } from "react";
import AdminOptions from "../Components/AdminOptions/AdminOptions";
import "./css/ManageProducts.css";
import axios from "axios";
import CargarCamiseta from "../Components/CargarCamiseta/CargarCamiseta";
import UpdateShirt from "../Components/UpdateShirt/UpdateShirt";
import DeleteProduct from "../Components/DeleteProduct/DeleteProduct";
import { ShopContext } from "../Context/ShopContext";

function ManageProducts() {
  const [option, setOption] = useState("cargar");
  const {product} = useContext(ShopContext)


  let optionContent = <CargarCamiseta />;
  if (option == "update") {
    optionContent = <UpdateShirt product={product}/>;
  } else if (option == "delete") {
    optionContent = <DeleteProduct product={product} />;
  } else if (option == "cargar") {
    optionContent = <CargarCamiseta />;
  }
  return (
    <div className="manage-products">
      <AdminOptions />
      <div className="edit-products">
        <div className="product-manager-menu">
          <ul className="product-manager-menu-content">
            <li onClick={()=>{setOption("cargar")}}>Cargar Producto</li>
            <li onClick={()=>{setOption("update")}}>Actualizar Producto</li>
            <li onClick={()=>{setOption("delete")}}>Elimar un producto</li>
          </ul>
        </div>
        {optionContent}
      </div>
    </div>
  );
}

export default ManageProducts;
