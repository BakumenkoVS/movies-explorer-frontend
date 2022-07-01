import React, { useContext, useEffect, useRef, useState } from "react";
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
   const refName = useRef();
   const refEmail = useRef();
   const [data, setData] = useState({
      name: "",
      email: "",
   });

   const { name, email } = data;
   function handleChange(e) {
      const { name, value } = e.target;
      setData({
         ...data,
         [name]: value,
      });
   }

   function handleSubmit(e) {
      e.preventDefault();
      debugger;
      handleUpdateUser(name, email);
   }

   useEffect(() => {
      refName.current.value = "";
      refEmail.current.value = "";
   }, [handleUpdateUser]);

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
                     ref={refName}
                     className="profile__input"
                     required
                     minLength="2"
                     maxLength="40"
                     name="name"
                     type="name"
                     placeholder="Имя"
                     onChange={handleChange}
                  />
                  <p className="profile__name">{currentUser?.name}</p>
               </div>
               <div className="profile__container">
                  <input
                     ref={refEmail}
                     className="profile__input profile__input_email"
                     required
                     minLength="2"
                     maxLength="40"
                     name="email"
                     type="email"
                     placeholder="E-mail"
                     onChange={handleChange}
                  />
                  <p className="profile__name profile__name_email">
                     {currentUser?.email}
                  </p>
               </div>

               <button className="profile__button" type="submit">
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
