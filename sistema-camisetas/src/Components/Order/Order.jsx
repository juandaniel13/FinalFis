import React from "react";
import "./Order.css"

function Order() {
  return (
    <div className="order">
      <img src="https://i.pinimg.com/236x/24/8e/1e/248e1e4f38522a9179f8c7b3ac3b1508.jpg" alt="" />
      <div className="product-data">
        <ul>
          <li>Nombre:</li>
          <li>Precio:</li>
        </ul>
      </div>
      <div className="order-data">
        <ul>
          <li>Estado:</li>
          <li>Fecha de compra:</li>
          <li>Fecha de cumplimiento:</li>
          <li>Número de pedido:</li>
        </ul>
      </div>
    </div>
  );
}

export default Order;
