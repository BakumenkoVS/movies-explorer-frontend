import React from "react";
import navIcon from "../../images/Navigation-icon.svg";
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';

export default function HederMovies({onEditMenu}) {
   return (
      <header className="header header_movies">
         <Link to="/">
            <img src={logo} className="logo" alt="Логотип" />
         </Link>
         <img
            onClick={onEditMenu}         
            src={navIcon}
            className="heder__nav-logo"
            alt="Логотип навигации"
         />
      </header>
   );
}
