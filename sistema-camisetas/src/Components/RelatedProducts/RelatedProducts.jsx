import React from "react";
import "./RelatedProducts.css";
import { data_product } from "../assets/nav_bar_media/data";
import Item from "../Item/Item"

function RelativeProducts() {
  return (
    <div className="related-products">
      <h2>Related Prodcts</h2>
      <hr />
      <div className="related-products-item">
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice ={item.newPrice} oldPrice = {item.oldPrice}/>
        })}
      </div>
    </div>
  );
}

export default RelativeProducts;
