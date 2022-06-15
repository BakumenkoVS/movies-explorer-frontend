import logo from "../../images/logo.svg";
import "./HeaderMain.css";
import { Link, Route, Routes } from "react-router-dom";

export default function Header() {
   return (
      <header className="header">
         <img src={logo} className="logo" alt="Логотип" />
         <div className="heder__links">
            <a className="header__link">Регистрация</a>
            <a className="header__link header__link_button">Войти</a>
         </div>
      </header>
   );
}
