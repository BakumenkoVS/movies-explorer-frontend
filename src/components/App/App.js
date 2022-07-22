import React, { useState } from "react";
import "./App.css";

import Main from "./../Main/Main";
import Movies from "./../Movies/Movies";
import { Route, Routes } from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Menu from "../Menu/Menu";
export default function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   function handleEditMenuOpen() {
      setIsMenuOpen(true);
   }

   function handleEditMenuClose() {
      setIsMenuOpen(false);
   }

   return (
      <div className="page">
         <Routes>
            <Route path="/" element={<Main />} />
            <Route
               path="/movies"
               element={
                  <Movies
                     onClose={handleEditMenuClose}
                     isOpen={isMenuOpen}
                     onEditMenu={handleEditMenuOpen}
                  />
               }
            />
            <Route
               path="/saved-movies"
               element={
                  <SavedMovies
                     onClose={handleEditMenuClose}
                     isOpen={isMenuOpen}
                     onEditMenu={handleEditMenuOpen}
                  />
               }
            />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route
               path="/profile"
               element={
                  <Profile
                     onClose={handleEditMenuClose}
                     isOpen={isMenuOpen}
                     onEditMenu={handleEditMenuOpen}
                  />
               }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/1" element={<Menu />} />
         </Routes>
      </div>
   );
}
