import React from "react";
import "./Breadcrum.css";

function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
     { `HOME > SHOP > ${product.category} > ${product.name}`}
    </div>
  );
}

export default Breadcrum;
