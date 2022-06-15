import React from "react";
import navIcon from "../../images/Navigation-icon.svg";
import logo from "../../images/logo.svg";

export default function HederMovies() {
   return (
      <header className="header header_movies">
         <img src={logo} className="logo" alt="Логотип" />
         <img
            src={navIcon}
            className="heder__nav-logo"
            alt="Логотип навигации"
         />
      </header>
   );
}
