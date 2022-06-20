import React from "react";
import "./Profile.css";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
export default function Profile({ isOpen, onEditMenu, onClose }) {
   return (
      <>
         <HeaderMovies onEditMenu={onEditMenu} />

         <div className="profile">
            <Menu isOpen={isOpen} onClose={onClose} />

            <h2 className="signTitle">Привет, Владислав!</h2>
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
                  <p className="profile__name">Владислав</p>
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
                     pochta@yande.ru
                  </p>
               </div>

               <button className="profile__button" type="submit">
                  Редактировать
               </button>

               <Link className="profile__link" to="/signup">
                  Выйти из аккаунта
               </Link>
            </form>
         </div>
      </>
   );
}
