import React, { useEffect, useState } from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export default function Register({ handleRegister }) {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [nameDirty, setNameDirty] = useState(false);
   const [emailDirty, setEmailDirty] = useState(false);
   const [passwordDirty, setPasswordDirty] = useState(false);
   const [nameError, setNameError] = useState("Имя не может быть пустым");
   const [emailError, setEmailError] = useState("Почта не может быть пустой");
   const [passwordError, setPasswordError] = useState(
      "Пароль не может быть пустым"
   );
   const [formValid, setFormValid] = useState(false);

   useEffect(() => {
      if (nameError || emailError || passwordError) {
         setFormValid(false);
      } else {
         setFormValid(true);
      }
   }, [nameError, emailError, passwordError]);

   const handlerBlur = (e) => {
      switch (e.target.name) {
         case "name":
            setNameDirty(true);
            break;
         case "email":
            setEmailDirty(true);
            break;
         case "password":
            setPasswordDirty(true);
            break;
      }
   };

   function handleChangeName(e) {
      setName(e.target.value);
      if (e.target.value.length < 2 || e.target.value.length > 40) {
         setNameError("Имя не может быть меньше 2 и больше 40 символов");
         if (!e.target.value) {
            setNameError("Имя не может быть пустым");
         }
      } else {
         setNameError("");
      }
   }

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

      handleRegister(password, email, name);
   }

   return (
      <div className="register">
         <Link to='/'>
            <img src={logo} className="logo" alt="Логотип" />
         </Link>
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
               onChange={handleChangeName}
               onBlur={(e) => handlerBlur(e)}
            />
            {nameDirty && nameError && (
               <span className="error">{nameError}</span>
            )}
            <p className="input__title">E-mail</p>
            <input
               className="inputForm__input"
               required
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
               className="inputForm__submit-button"
               type="submit"
            >
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
