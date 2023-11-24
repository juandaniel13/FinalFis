import React from "react";
import { useContext } from "react";
import AdminOptions from "../Components/AdminOptions/AdminOptions";
import userPhoto from "../assets/img/user2.jpg";
import "./css/Admin.css"
import { ShopContext } from "../Context/ShopContext";

function Admin() {
  const {account, setAccount} = useContext(ShopContext);
  console.log("cuenta del usuario",account);
  return (
    <div className="admin">
      <AdminOptions />
      <div className="admin-info">
        <img src={userPhoto} alt="" />
        <ul>
          <li>Nombres: {account.user.person.nombre}</li>
          <li>Apellidos: {account.user.person.apellido}</li>
          <li>ID: {account.user.person.numero_documento}</li>
        </ul>
        <button>Editar datos</button>
      </div>
    </div>
  );
}

export default Admin;
