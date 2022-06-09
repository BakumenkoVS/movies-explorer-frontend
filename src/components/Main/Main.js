import React from "react";
import Header from "./../Header/Header";
import Promo from "./../Promo/Promo";
import "./Main.css";
import NavTab from "./../NavTab/NavTab";
import AboutProject from "./../AboutProject/AboutProject";
import Techs from './../Techs/Techs';
import AboutMe from './../AboutMe/AboutMe';
import Portfolio from './../Portfolio/Portfolio';
import Footer from './../Footer/Footer';
import { Route, Routes } from "react-router-dom";
export default function Main() {
   return (
      <div className="main">
         <Promo />
         <NavTab />
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio />
      </div>
   );
}
