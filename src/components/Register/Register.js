import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
export default function Register() {
   return (
      <div className="register">
         <img src={logo} className="logo" alt="Логотип" />
         <h2 className="signTitle">Добро пожаловать!</h2>
         <form>
            <input></input>
         </form>
      </div>
   );
}
