import React from "react";
import "./App.css";

import Main from "./../Main/Main";
import Movies from "./../Movies/Movies";
import { Route, Routes } from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
export default function App() {
   return (
      <div className="page">
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
         </Routes>
      </div>
   );
}
