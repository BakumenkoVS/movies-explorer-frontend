import React from "react";
import "./App.css";

import Main from "./../Main/Main";
import Movies from "./../Movies/Movies";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
export default function App() {
   return (
      <div className="page">
         <Header />
         <Routes>
            <Route path="/" element={
               <Main />
            }/>
            <Route path="/movies" element={
               <Movies />
            }/>
         </Routes>
         <Footer />
      </div>
   );
}
