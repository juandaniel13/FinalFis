import React from 'react'
import "./UserOptions.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function UserOptions() {
  return (
    <div className="user-options">
        <ul>
          <Link to="/User"><li>Mi Cuenta</li></Link>
          <Link to="/UserPurchases"><li>Gestionar Compras</li></Link>
          <li>Gestionar Estampados</li>
          <li>Cerrar sesión</li>
        </ul>
      </div>
  )
}

export default UserOptions