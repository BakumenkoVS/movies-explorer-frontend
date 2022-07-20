import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Menu.css";
import close from "../../images/close_icon.svg";
export default function Menu({ isOpen, onClose }) {
   const location = useLocation();
   const popupClass = `${
      location.pathname === "/"
         ? "popup__overlay popup__overlay_pink"
         : "popup__overlay"
   }`;
   return (
      <div className={isOpen ? "popup__overlay open" : popupClass}>
         <nav className={location.pathname === "/" ? "menu menu_pink" : "menu"}>
            <button onClick={onClose} className="menu__close-button">
               <img
                  src={close}
                  className="menu__close-button_img"
                  alt="Иконка закрытия"
               ></img>
            </button>
            <div className="menu__links">
               <NavLink onClick={onClose} to="/" className="menu__link">
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
               <Link
                  to="/profile"
                  className="menu__profile-link"
                  onClick={onClose}
               >
                  Аккаунт
               </Link>
            </div>
         </nav>
      </div>
   );
}
