import React, { useContext } from "react";
import "./css/user.css";
import userPhoto from "../assets/img/user2.jpg";
import UserOptions from "../Components/UserOptions/UserOptions";
import { ShopContext } from "../Context/ShopContext";

function User(newUser) {
  const {account, setAccount} = useContext(ShopContext);
  console.log("cuenta del usuario",account);
  return (
    <div className="user">
      <UserOptions/>
      <div className="user-info">
        <img src={userPhoto} alt="" />
        <ul>
          <li>Nombres: {account.user.person.nombre}</li>
          <li>Apellidos: {account.user.person.apellido}</li>
          <li>ID: {account.user.person.numero_documento}</li>
          <li>Email: {account.user.email}</li>
          <li>Dirección de envío: {account.user.person.direccion}</li>
          <li>Número telefónico: {account.user.person.celular}</li>
          <li></li>
        </ul>
        <button>Editar datos</button>
      </div>

      
    </div>
  );
}

export default User;
