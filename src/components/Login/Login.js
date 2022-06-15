import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export default function Login() {
   return (
      <div className="login">
         <img src={logo} className="logo" alt="Логотип" />
         <h2 className="signTitle">Рады видеть!</h2>
         <form className="inputForm">
            <p className="input__title">E-mail</p>
            <input
               className="inputForm__input"
               required
               minLength="2"
               maxLength="40"
               name="email"
               type="email"
            />
            <span className="error"></span>
            <p className="input__title">Пароль</p>
            <input
               className="inputForm__input"
               required
               minLength="6"
               maxLength="40"
               type="password"
               name="password"
            />
            <span className="error"></span>
            <button
               className="inputForm__sumbit-button inputForm__sumbit-button_login"
               type="submit"
            >
               Зарегистрироваться
            </button>
            <p className="input__subtitle">
               Ещё не зарегистрированы?
               <Link className="input__link" to="/signup">
                  Регистрация
               </Link>
            </p>
         </form>
      </div>
   );
}
