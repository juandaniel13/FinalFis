import React, { useContext } from 'react'
import "./css/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item';

function ShopCategory(props) {
  const{allProducts} = useContext(ShopContext);
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
      
        {allProducts.map((item,i)=>{
          if(props.category === item.categoria){
            return <Item key={i} id={item.id} name={item.nombre} image={item.silueta} precio ={item.precio} />
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