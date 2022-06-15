import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export default function Register() {
   return (
      <div className="register">
         <img src={logo} className="logo" alt="Логотип" />
         <h2 className="signTitle">Добро пожаловать!</h2>
         <form className="inputForm">
            <p className="input__title">Имя</p>
            <input
               className="inputForm__input"
               required
               minLength="2"
               maxLength="40"
               name="name"
               type="name"
            />
            <span className="error"></span>
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
            <button className="inputForm__sumbit-button" type="submit">
               Зарегистрироваться
            </button>
            <p className="input__subtitle">
               Уже зарегестрированы?
               <Link className="input__link" to="/signin">
                  Войти
               </Link>
            </p>
         </form>
      </div>
   );
}
