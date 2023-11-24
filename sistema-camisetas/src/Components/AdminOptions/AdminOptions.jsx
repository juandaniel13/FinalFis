import React from 'react'
import "./AdminOptions.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function AdminOptions() {
  return (
    <div className="admin-options">
        <ul>
          <Link to="/Admin"><li>Información del Administrador</li></Link>
          <li>Gestionar Categorias</li>
          <li>Gestionar Estampados</li>
          <Link to="/ManageProducts"><li>Gestionar Productos</li></Link>
          <li>Gestionar Usuarios</li>
          <li>Gestionar Solicitudes</li>
          <li>Estadísticas del sistema</li>

        </ul>
      </div>
  )
}

export default AdminOptions