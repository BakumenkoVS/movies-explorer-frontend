import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import close from "../../images/close_icon.svg";
export default function Menu() {
   return (
      <nav className="menu">
         <button className="menu__close-button">
            <img src={close} className="menu__close-button_img"></img>
         </button>
         <div className="menu__links">
            <NavLink to="/" className="menu__link" activeClassName="menu__link_active">
               Главная
            </NavLink>
            <NavLink to="/movies" className="menu__link" activeClassName="menu__link_active">
               Фильмы
            </NavLink>
            <NavLink to="/" className="menu__link" activeClassName="menu__link_active">
               Сохранённые фильмы
            </NavLink>
            <NavLink to="/profile" className="menu__profile-link">
            Аккаунт
            </NavLink>
         </div>
      </nav>
   );
}
