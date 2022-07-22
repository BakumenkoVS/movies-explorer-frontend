import React from "react";
import Promo from "./../Promo/Promo";
import "./Main.css";
import NavTab from "./../NavTab/NavTab";
import AboutProject from "./../AboutProject/AboutProject";
import Techs from "./../Techs/Techs";
import AboutMe from "./../AboutMe/AboutMe";
import Portfolio from "./../Portfolio/Portfolio";
import HeaderMain from "../HeaderMain/HeaderMain";
import Footer from "../Footer/Footer";
export default function Main() {
   return (
      <div className="main">
         <HeaderMain />
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
