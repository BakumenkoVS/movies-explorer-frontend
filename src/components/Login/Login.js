import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export default function Login({ handleLogin }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [emailDirty, setEmailDirty] = useState(false);
   const [passwordDirty, setPasswordDirty] = useState(false);
   const [emailError, setEmailError] = useState("Почта не может быть пустой");
   const [passwordError, setPasswordError] = useState(
      "Пароль не может быть пустым"
   );
   const [formValid, setFormValid] = useState(false);

   useEffect(() => {
      if (emailError || passwordError) {
         setFormValid(false);
      } else {
         setFormValid(true);
      }
   }, [emailError, passwordError]);

   const handlerBlur = (e) => {
      switch (e.target.name) {
         case "email":
            setEmailDirty(true);
            break;
         case "password":
            setPasswordDirty(true);
            break;
      }
   };

   function handleChangeEmail(e) {
      setEmail(e.target.value);
      let re =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(e.target.value)) {
         setEmailError("Некорректная почта");
         if (!e.target.value) {
            setEmailError("Почта не может быть пустой");
         }
      } else {
         setEmailError("");
      }
   }

   function handleChangePassword(e) {
      setPassword(e.target.value);
      if (e.target.value.length < 3 || e.target.value.length > 7) {
         setPasswordError("Пароль не может быть меньше 3 и больше 7 символов");
         if (!e.target.value) {
            setPasswordError("Пароль не может быть пустым");
         }
      } else {
         setPasswordError("");
      }
   }

   function handleSubmit(e) {
      e.preventDefault();

      handleLogin(password, email);
   }

   return (
      <div className="login">
         <Link to="/">
            <img src={logo} className="logo" alt="Логотип" />
         </Link>
         <h2 className="signTitle">Рады видеть!</h2>
         <form className="inputForm" onSubmit={handleSubmit}>
            <p className="input__title">E-mail</p>
            <input
               className="inputForm__input"
               requiredww
               minLength="2"
               maxLength="40"
               name="email"
               type="email"
               value={email}
               onChange={handleChangeEmail}
               onBlur={(e) => handlerBlur(e)}
            />
            {emailDirty && emailError && (
               <span className="error">{emailError}</span>
            )}
            <p className="input__title">Пароль</p>
            <input
               className="inputForm__input"
               required
               minLength="6"
               maxLength="40"
               type="password"
               name="password"
               value={password}
               onChange={handleChangePassword}
               onBlur={(e) => handlerBlur(e)}
            />
            {passwordDirty && passwordError && (
               <span className="error">{passwordError}</span>
            )}
            <button
               disabled={!formValid}
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
