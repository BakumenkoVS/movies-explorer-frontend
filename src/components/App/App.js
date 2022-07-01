import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./../Main/Main";
import Movies from "./../Movies/Movies";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { api } from "../../utils/MainApi";

export default function App() {
   //States
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [loggedIn, setLoggedIn] = useState(false);
   const [currentUser, setCurrentUser] = useState(null);
   const history = useNavigate();

   useEffect(() => {
      tokenCheck();
   }, []);

   useEffect(() => {
      if (loggedIn) {
         history("/movies");
      }
   }, [loggedIn]);

   //handlers
   function handleEditMenuOpen() {
      setIsMenuOpen(true);
   }
   function handleEditMenuClose() {
      setIsMenuOpen(false);
   }

   function handleRegister(password, email, name) {
      return api
         .signUp(password, email, name)
         .then((res) => {
            history("/signin");
         })
         .catch((err) => {
            console.log(err);
         });
   }

   const handleUpdateUser = (name, email) => {
      debugger
      api.addUserInfo(name, email)
         .then((res) => {
            setCurrentUser(res);
            debugger
         })
         .catch((err) => console.log(err));
   };

   function handleLogin(password, email) {

      return api

         .signIn(password, email)
         .then((data) => {
            if (data.token) {
               localStorage.setItem("jwt", data.token);
               setLoggedIn(true);
               history("/movies");
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }

   function signOut() {
      localStorage.removeItem("jwt");
      setLoggedIn(false);
   }

   function tokenCheck() {
      let jwt = localStorage.getItem("jwt");
      if (jwt) {
         api.getContent().then((res) => {
            debugger;
            if (res) {
               setCurrentUser(res.data);
               setLoggedIn(true);
            }
         });
      }
   }

   useEffect(() => {
      if (loggedIn) {
         Promise.all([api.getContent()])

            .then(([user]) => {
               setCurrentUser(user.data);
            })
            .catch((err) => console.log(err));
      }
   }, [loggedIn]);

   return (
      <CurrentUserContext.Provider value={currentUser}>
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
               <Route
                  path="/signup"
                  element={<Register handleRegister={handleRegister} />}
               />
               <Route
                  path="/signin"
                  element={<Login handleLogin={handleLogin} />}
               />
               <Route
                  path="/profile"
                  element={
                     <ProtectedRoute>
                        <Profile
                           onClose={handleEditMenuClose}
                           isOpen={isMenuOpen}
                           onEditMenu={handleEditMenuOpen}
                           loggedIn={loggedIn}
                           signOut={signOut}
                           handleUpdateUser={handleUpdateUser}
                        />
                     </ProtectedRoute>
                  }
               />
               <Route path="*" element={<NotFound history={history} />} />
            </Routes>
         </div>
      </CurrentUserContext.Provider>
   );
}
