import React from 'react'
import "./NewCollections.css"
import {new_collection} from "../assets/new_collections.js"
import Item from '../Item/Item'

function NewCollections() {
  return (
    <div className='new-collections'>
        <h2>NEW COLLECTIONS</h2>
        <hr/>
        <div className="collections">
            {new_collection.map((item, i)=>{ 
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice ={item.newPrice} oldPrice = {item.oldPrice}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections