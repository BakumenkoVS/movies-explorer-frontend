import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Menu.css";
import close from "../../images/close_icon.svg";
export default function Menu({ isOpen, onClose }) {
   return (
      <div className={isOpen ? `popup__overlay open` : `popup__overlay`}>
         <nav className="menu">
            <button onClick={onClose} className="menu__close-button">
               <img src={close} className="menu__close-button_img"></img>
            </button>
            <div className="menu__links">
               <NavLink onClick={onClose} exact to="/" className="menu__link">
                  Главная
               </NavLink>
               <NavLink onClick={onClose} to="/movies" className="menu__link">
                  Фильмы
               </NavLink>
               <NavLink
                  onClick={onClose}
                  to="/saved-movies"
                  className="menu__link menu__link_margin"
               >
                  Сохранённые фильмы
               </NavLink>
               <Link to="/profile" className="menu__profile-link">
                  Аккаунт
               </Link>
            </div>
         </nav>
      </div>
   );
}
