import React, { useContext } from "react";
import "./css/Singup.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
/* import { auth } from "../assets/helpers/users_firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; */
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
function SingUp() {
  const [person, setPerson] = useState({
    nombre: "",
    apellido: "",
    tipoId: "",
    id: "",
    dirEnvio: "",
    tel1: 0,
    tel2: 0,
    rol: "user",
  });
  const [password, setPassword] = useState("");
  const [confirmpPssword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const { account, setAccount } = useContext(ShopContext);

  const handleNombreChange = (e) => {
    setPerson({
      ...person,
      nombre: e.target.value,
    });
  };

  const handleApellidoeChange = (e) => {
    setPerson({
      ...person,
      apellido: e.target.value,
    });
  };
  const handleTipoIdChange = (e) => {
    setPerson({
      ...person,
      tipoId: e.target.value,
    });
  };
  const handleIdChange = (e) => {
    setPerson({
      ...person,
      id: e.target.value,
    });
  };
  const handleDirEnvioChange = (e) => {
    setPerson({
      ...person,
      dirEnvio: e.target.value,
    });
  };
  const handleTel1dChange = (e) => {
    setPerson({
      ...person,
      tel1: e.target.value,
    });
  };
  const handleTel2dChange = (e) => {
    setPerson({
      ...person,
      tel2: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const url = "/usuarios/register";

  const submitRegistration = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/users", {
        email: email,
        contraseña: password,
        person: {
          numero_documento: person.id,
          tipo_documento: person.tipoId,
          nombre: person.nombre,
          apellido: person.apellido,
          celular: person.tel1,
          direccion: person.dirEnvio,
        },
        rol: "user",
      });

      console.log("respuesta de axios", res);

      if (res.status >= 200 && res.status < 300) {
        console.log("Todo bien todo correcto");
        alert("se ha registrado de forma exitosa");
        return <Navigate to={"/login"}/>
      } else {
        console.log("Hubo un problema con la solicitud");
        // Puedes manejar errores o realizar acciones adicionales en caso de error
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Puedes manejar errores de red u otros errores aquí
    }
  };

  return (
    <div className="Singup">
      <div className="Singup-container">
        <h2>Registro de Usuario</h2>
        <form className="Singup-fields" onSubmit={submitRegistration}>
          <input
            type="text"
            placeholder="Nombres"
            required
            onChange={handleNombreChange}
          />
          <input
            type="text"
            placeholder="Apellidos"
            required
            onChange={handleApellidoeChange}
          />
          <label htmlFor="">Tipo de identificación: </label>
          <select
            name=""
            id=""
            value={person.tipoId}
            onChange={handleTipoIdChange}
          >
            <option value="CC" selected>
              Cédula de ciudadanía
            </option>
            <option value="CE">Cédula de extrangería</option>
          </select>
          <input
            type="number"
            placeholder="Número de identificación"
            required
            onChange={handleIdChange}
          />
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
            onClick={handlePasswordChange}
          />
          <input
            type="text"
            placeholder="Dirección de envío"
            required
            onChange={handleDirEnvioChange}
          />
          <input
            type="number"
            placeholder="Número telefónico"
            required
            onChange={handleTel1dChange}
          />
          <input
            type="number"
            placeholder="Alternativa número telefónico (opcional)"
            onChange={handleTel2dChange}
          />
          <input type="submit" value="Continuar" className="btn-submit" />
        </form>
        <div className="Singup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            Para continuar con el proceso de registro, debes estar de acuerdo
            con las politicas de tratamiento de datos.
          </p>
        </div>

        <p className="Singup-login">
          Ya tienes una cuenta? <Link to="/Login">Ingresa aquí</Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default SingUp;
