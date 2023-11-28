import React, {useContext} from "react";
import "./RelatedProducts.css";
/* import { data_product } from "../assets/nav_bar_media/data"; */
import Item from "../Item/Item"
import { ShopContext } from "../../Context/ShopContext";

function RelativeProducts() {
  const {allProducts} = useContext(ShopContext);
  return (
    <div className="related-products">
      <h2>Related Prodcts</h2>
      <hr />
      <div className="related-products-item">
        {allProducts.map((item, i) => {
          return  <Item key={i} id={item.id} name={item.nombre} image={item.silueta} precio ={item.precio} />
        })}
      </div>
    </div>
  );
}

export default RelativeProducts;
