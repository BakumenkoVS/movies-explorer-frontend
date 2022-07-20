import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({
   isOpen,
   onEditMenu,
   onClose,
   signOut,
   handleUpdateUser,
}) {
   const currentUser = useContext(CurrentUserContext);

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [nameDirty, setNameDirty] = useState(false);
   const [emailDirty, setEmailDirty] = useState(false);
   const [nameError, setNameError] = useState("Имя не может быть пустым");
   const [emailError, setEmailError] = useState("Почта не может быть пустой");

   const [formValid, setFormValid] = useState(false);

   useEffect(() => {
      if (nameError || emailError) {
         setFormValid(false);
      } else {
         setFormValid(true);
      }
   }, [nameError, emailError]);

   const handlerBlur = (e) => {
      switch (e.target.name) {
         case "name":
            setNameDirty(true);
            break;
         case "email":
            setEmailDirty(true);
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

   function handleSubmit(e) {
      e.preventDefault();
      handleUpdateUser(name, email);
      setEmail("");
      setName("");
   }

   useEffect(() => {}, [handleUpdateUser]);

   return (
      <>
         <HeaderMovies
            onEditMenu={onEditMenu}
            isOpen={isOpen}
            onClose={onClose}
         />

         <div className="profile">
            <h2 className="signTitle">Привет, {currentUser?.name}!</h2>
            <form className="profileForm" onSubmit={handleSubmit}>
               <div className="profile__container">
                  <input
                     className="profile__input"
                     required
                     minLength="2"
                     maxLength="40"
                     name="name"
                     type="name"
                     placeholder="Имя"
                     value={name}
                     onChange={handleChangeName}
                     onBlur={(e) => handlerBlur(e)}
                  />
                  {nameDirty && nameError && (
                     <span className="error error__profile">{nameError}</span>
                  )}
                  <p className="profile__name">{currentUser?.name}</p>
               </div>
               <div className="profile__container">
                  <input
                     className="profile__input profile__input_email"
                     required
                     minLength="2"
                     maxLength="40"
                     name="email"
                     type="email"
                     placeholder="E-mail"
                     value={email}
                     onChange={handleChangeEmail}
                     onBlur={(e) => handlerBlur(e)}
                  />
                  {emailDirty && emailError && (
                     <span className="error error__profile_margin">
                        {emailError}
                     </span>
                  )}
                  <p className="profile__name profile__name_email">
                     {currentUser?.email}
                  </p>
               </div>

               <button
                  disabled={!formValid}
                  className="profile__button"
                  type="submit"
               >
                  Редактировать
               </button>

               <Link className="profile__link" to="/signup" onClick={signOut}>
                  Выйти из аккаунта
               </Link>
            </form>
         </div>
      </>
   );
}
