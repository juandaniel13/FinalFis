import React from "react";
import "./css/Login.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { account, setAccount } = useContext(ShopContext);
  const  [redirect, setRedirect] = useState(false);
  const[isAdmin, setIsAdmin] = useState(false)
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
   
  
  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:3000/users", {
        email: email,
        contraseña: password,
      });
      const getUser = () => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].email == email) {
            return res.data[i];
          }
        }
      };
      const data = getUser();

      console.log("respuesta de axios", res, data);

      if (res.status >= 200 && res.status < 300) {
      
        console.log("Todo bien todo correcto");
        if(data.rol == "admin"){
          setIsAdmin(true)
        }
        console.log(data);
        setAccount({
          ...account,
          login: true,
          user: {
            person: data.person,
            email: data.email,
            password: data.password,
          },
          
        });
        setRedirect(true)
        console.log(account);

        
        // Puedes realizar acciones adicionales aquí si la solicitud fue exitosa
      } else {
        console.log("Hubo un problema con la solicitud");
        // Puedes manejar errores o realizar acciones adicionales en caso de error
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Puedes manejar errores de red u otros errores aquí
    }
  };

  if(isAdmin){
    if(redirect){
      console.log("redirigiendo...");
      return <Navigate to="/Admin"/>
    }
  }else{
    if(redirect){
      console.log("redirigiendo...");
      return <Navigate to="/User"/>
    }
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <h2>Iniciar Sesión</h2>
        <form className="Login-fields" onSubmit={submitLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            name=""
            id=""
            required
            onChange={handlePasswordChange}
          />
          <input type="submit" value="Continuar" className="btn-submit" />
        </form>

        <br />
        <br />
        <br />
        <p className="create-acount">
          Aun no tienes una cuenta?{" "}
          <Link to="/Singup">
            <a href="">Registrate aquí</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
