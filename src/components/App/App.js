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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function App() {
   //States
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [loggedIn, setLoggedIn] = useState(false);

   //handlers
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
                  <ProtectedRoute>
                     <Movies
                        onClose={handleEditMenuClose}
                        isOpen={isMenuOpen}
                        onEditMenu={handleEditMenuOpen}
                        loggedIn={loggedIn}
                     />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/saved-movies"
               element={
                  <ProtectedRoute>
                     <SavedMovies
                        onClose={handleEditMenuClose}
                        isOpen={isMenuOpen}
                        onEditMenu={handleEditMenuOpen}
                        loggedIn={loggedIn}
                     />
                  </ProtectedRoute>
               }
            />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route
               path="/profile"
               element={
                  <ProtectedRoute>
                     <Profile
                        onClose={handleEditMenuClose}
                        isOpen={isMenuOpen}
                        onEditMenu={handleEditMenuOpen}
                        loggedIn={loggedIn}
                     />
                  </ProtectedRoute>
               }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/1" element={<Menu />} />
         </Routes>
      </div>
   );
}
