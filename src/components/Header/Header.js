import logo from "../../images/logo.svg";
import "./Header.css";
import { Link, Route, Routes } from "react-router-dom";
import navIcon from "../../images/Navigation-icon.svg";

export default function Header() {
   return (
      <Routes>
         <Route
            exact
            path="/"
            element={
               <header className="header">
                  <img src={logo} className="logo" alt="Логотип" />
                  <div className="heder__links">
                     <a className="header__link">Регистрация</a>
                     <a className="header__link header__link_button">Войти</a>
                  </div>
               </header>
            }
         />
         <Route
            path="/movies"
            element={
               <header className="header header_movies">
                  <img src={logo} className="logo" alt="Логотип" />
               <img
                  src={navIcon}
                  className="heder__nav-logo"
                  alt="Логотип навигации"
               />
               </header>
            }
         />
      </Routes>
   );
}
