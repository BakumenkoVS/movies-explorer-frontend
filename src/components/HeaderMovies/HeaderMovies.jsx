import React from "react";
import navIcon from "../../images/Navigation-icon.svg";
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./HeaderMovies.css";

export default function HederMovies({ onEditMenu, isOpen, onClose }) {
   const location = useLocation();

   return (
      <header
         className={
            location.pathname === "/" ? "header" : "header header_movies"
         }
      >
         <Link to="/">
            <img src={logo} className="logo" alt="Логотип" />
         </Link>
         <img
            onClick={onEditMenu}
            src={navIcon}
            className="heder__nav-logo"
            alt="Логотип навигации"
         />
         <Menu isOpen={isOpen} onClose={onClose} />
      </header>
   );
}
