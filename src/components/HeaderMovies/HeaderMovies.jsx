import React from "react";
import navIcon from "../../images/Navigation-icon.svg";
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './HeaderMovies.css'

export default function HederMovies({onEditMenu, isOpen, onClose}) {
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
         <Menu isOpen={isOpen} onClose={onClose}/>

      </header>
   );
}
