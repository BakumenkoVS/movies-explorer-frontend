import React, { useState } from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export default function Login({ handleLogin }) {
   const [data, setData] = useState({
      email: "",
      password: "",
   });
   const { email, password } = data;

   function handleChange(e) {
      const { name, value } = e.target;
      setData({
         ...data,
         [name]: value,
      });
   }

   function handleSubmit(e) {
      e.preventDefault();

      handleLogin(password, email);
   }

   return (
      <div className="login">
         <img src={logo} className="logo" alt="Логотип" />
         <h2 className="signTitle">Рады видеть!</h2>
         <form className="inputForm" onSubmit={handleSubmit}>
            <p className="input__title">E-mail</p>
            <input
               className="inputForm__input"
               required
               minLength="2"
               maxLength="40"
               name="email"
               type="email"
               value={email}
               onChange={handleChange}
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
               value={password}
               onChange={handleChange}
            />
            <span className="error"></span>
            <button
               className="inputForm__submit-button inputForm__submit-button_login"
               type="submit"
            >
               Войти
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
