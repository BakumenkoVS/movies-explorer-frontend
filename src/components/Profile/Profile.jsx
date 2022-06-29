import React, { useContext } from "react";
import "./Profile.css";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({ isOpen, onEditMenu, onClose, signOut }) {
   const currentUser = useContext(CurrentUserContext);

   return (
      <>
         <HeaderMovies
            onEditMenu={onEditMenu}
            isOpen={isOpen}
            onClose={onClose}
         />

         <div className="profile">
            <h2 className="signTitle">Привет, {currentUser?.name}!</h2>
            <form className="profileForm">
               <div className="profile__container">
                  <input
                     className="profile__input "
                     required
                     minLength="2"
                     maxLength="40"
                     name="name"
                     type="name"
                     placeholder="Имя"
                  />
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
