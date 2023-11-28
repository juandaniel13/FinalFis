import React from 'react'
import "./ProductManagerMenu.css"

function ProductManagerMenu() {
  return (
    <div className='product-manager-menu'>
        <ul className='product-manager-menu-content'>
          <li>Cargar Producto</li>
          <li>Actualizar Producto</li>
          <li>Elimar un producto</li>
        </ul>
    </div>
  )
}

export default ProductManagerMenu