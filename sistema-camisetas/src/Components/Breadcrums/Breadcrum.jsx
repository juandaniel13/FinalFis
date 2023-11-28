import React from "react";
import "./Breadcrum.css";

function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
     { `HOME > SHOP > ${product.categoria} > ${product.nombre}`}
    </div>
  );
}

export default Breadcrum;
