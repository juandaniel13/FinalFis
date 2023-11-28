import React, { useContext } from 'react'
import "../Popular/Popular.css"
import Item from "../Item/Item"
import { ShopContext } from '../../Context/ShopContext'
function Popular() {
  const {allProducts} = useContext(ShopContext)
  return (
    <div className='popular'>
        <h1>PRODUCTOS POPULARES</h1>
        <hr />
        <div className="popular-item">
            {allProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.nombre} image={item.silueta} precio ={item.precio} />

             })}
        </div>
    </div>
  )
}
export default Popular