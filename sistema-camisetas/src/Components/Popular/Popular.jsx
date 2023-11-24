import React from 'react'
import "../Popular/Popular.css"
import { data_popular } from '../assets/data_popular'
import Item from "../Item/Item"
function Popular() {
  return (
    <div className='popular'>
        <h1>PRODUCTOS POPULARES</h1>
        <hr />
        <div className="popular-item">
            {data_popular.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice ={item.newPrice} oldPrice = {item.oldPrice}/>

             })}
        </div>
    </div>
  )
}
export default Popular