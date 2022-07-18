import React from "react";
import Promo from "./../Promo/Promo";
import "./Main.css";
import NavTab from "./../NavTab/NavTab";
import AboutProject from "./../AboutProject/AboutProject";
import Techs from "./../Techs/Techs";
import AboutMe from "./../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import HeaderMain from "../HeaderMain/HeaderMain";
import Footer from "../Footer/Footer";
import HederMovies from "../HeaderMovies/HeaderMovies";
export default function Main({ loggedIn, onClose, onEditMenu, isOpen }) {
   return (
      <div className="main">
         {loggedIn ? (
            <HederMovies
               onEditMenu={onEditMenu}
               isOpen={isOpen}
               onClose={onClose}
            />
         ) : (
            <HeaderMain />
         )}
         <Promo />
         <NavTab />
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio />
         <Footer />
      </div>
   );
}
