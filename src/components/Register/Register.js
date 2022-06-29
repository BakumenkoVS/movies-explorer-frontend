import React, { useState } from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export default function Register({ handleRegister }) {
   const [data, setData] = useState({
      email: "",
      password: "",
      name: "",
   });

   const { email, password, name } = data;
   function handleChange(e) {
      const { name, value } = e.target;
      setData({
         ...data,
         [name]: value,
      });
   }

   function handleSubmit(e) {
      e.preventDefault();

      handleRegister(password, email, name);
   }

   return (
      <div className="register">
         <img src={logo} className="logo" alt="Логотип" />
         <h2 className="signTitle">Добро пожаловать!</h2>
         <form className="inputForm" onSubmit={handleSubmit}>
            <p className="input__title">Имя</p>
            <input
               className="inputForm__input"
               required
               minLength="2"
               maxLength="40"
               name="name"
               type="name"
               value={name}
               onChange={handleChange}
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
            <button className="inputForm__submit-button" type="submit">
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
