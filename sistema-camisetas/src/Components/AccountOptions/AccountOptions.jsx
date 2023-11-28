import React from 'react'
import "./AccountOptions.css"
import userPhoto from   "../../assets/img/user2.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function AccountOptions() {
  return (
    <div className='account-options'>
        <img src={userPhoto} alt="" />
        <div className="account-options-btn">
            <Link to="/User"><button>mi cuenta</button></Link>
            <Link><button>salir</button></Link>
        </div>
    </div>
  )
}

export default AccountOptions