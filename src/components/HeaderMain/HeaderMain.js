import logo from "../../images/logo.svg";
import "./HeaderMain.css";
import { Link, Route, Routes } from "react-router-dom";

export default function Header() {
   return (
      <header className="header">
         <Link to="/">
            <img src={logo} className="logo" alt="Логотип" />
         </Link>

         <div className="heder__links">
            <Link to="/signup" className="header__link">
               Регистрация
            </Link>
            <Link to="/signin" className="header__link header__link_button">
               Войти
            </Link>
         </div>
      </header>
   );
}
