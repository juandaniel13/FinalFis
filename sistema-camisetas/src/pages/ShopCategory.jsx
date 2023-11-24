import React, { useContext } from 'react'
import "./css/ShopCategory.css"
import { data_product as all_products } from '../Components/assets/nav_bar_media/data';
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item';

function ShopCategory(props) {
  const{all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">

        <p>
          <span>Showin 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          sort by ⏬
        </div>
      </div>
      <div className="shopCategory-products">
      
        {all_products.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice ={item.newPrice} oldPrice = {item.oldPrice}/>
          }else{
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">
        Exprlorar más
      </div>
    </div>
  )
}

export default ShopCategory