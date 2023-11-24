import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useParams} from "react-router-dom";


function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} width={380} height={450}></img></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new"></div>
        {`$${props.newPrice}.000`}
      </div>
     {/*  <div className="item-price-old">{props.oldPrice}</div> */}
    </div>
  );
}

export default Item;
