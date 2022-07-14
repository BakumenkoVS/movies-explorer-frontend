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
import { moviesApi } from "../../utils/MoviesApi";

export default function App() {
   //States
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [loggedIn, setLoggedIn] = useState(false);
   const [currentUser, setCurrentUser] = useState(null);
   const [movies, setMovies] = useState(null);
   const [moviesSaved, setMoviesSaved] = useState(null);
   const [shortcut, setShortcut] = useState(false);
   const [shortcutSave, setShortcutSave] = useState(false);
   const [searchMovies, setSearchMovies] = useState([]);
   const [searchSavedMovies, setSearchSavedMovies] = useState([]);

   const history = useNavigate();

   //инициализация проверки токена
   useEffect(() => {
      tokenCheck();
   }, []);

   //При изменении state login переадресует на страницу movies
   useEffect(() => {
      if (loggedIn) {
         history("/movies");
      }
   }, [loggedIn]);

   useEffect(() => {
      setShortcut(JSON.parse(localStorage.getItem("shortcut")));
      setSearchMovies(JSON.parse(localStorage.getItem("foundFilms")));
      setMoviesSaved(JSON.parse(localStorage.getItem("moviesSave")));
   }, []);

   //handlers
   //Открытие меню
   function handleEditMenuOpen() {
      setIsMenuOpen(true);
   }

   //закрытие меню
   function handleEditMenuClose() {
      setIsMenuOpen(false);
   }

   //handler регистрации  получает пароль логин и имя
   //перенаправляет на страницу логина
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

   //Handler обновления информации о пользователе получает name и email
   // отдает обновленную информацию о пользователе
   const handleUpdateUser = (name, email) => {
      api.addUserInfo(name, email)
         .then((res) => {
            setCurrentUser(res);
         })
         .catch((err) => console.log(err));
   };

   //Handler login получает password и email отлает jwt токен
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

   //Функция выхода из профиля
   function signOut() {
      localStorage.removeItem("jwt");
      setLoggedIn(false);
   }

   //функция проверяет наличия токена в локальном хранилище и если он есть
   //разрешает вход без авторизации
   function tokenCheck() {
      let jwt = localStorage.getItem("jwt");
      if (jwt) {
         api.getContent().then((res) => {
            if (res) {
               setCurrentUser(res.data);
               setLoggedIn(true);
            }
         });
      }
   }

   //Функция фильтрует исходный массив фильмов
   //по продолжительности и ключевому набору букв
   function filterMovies(moviesData, inputInfo, duration) {
      return moviesData.filter((item) => {
         return duration
            ? item.nameRU
                 .toLowerCase()
                 .includes(`${inputInfo.toLowerCase()}`) && item.duration < 40
            : item.nameRU.toLowerCase().includes(`${inputInfo.toLowerCase()}`);
      });
   }

   //функция получает inputInfo из формы поиска и фильтрует массив всех фильмов
   //по ключевому слову и продолжительности так же записывает результаты в локальное хранилище
   const foundFilms = (inputInfo) => {
      debugger;
      const newFilterMovies = filterMovies(movies, inputInfo, shortcut);
      console.log(1);
      console.log(newFilterMovies);
      setSearchMovies(newFilterMovies);
      localStorage.setItem("foundFilms", JSON.stringify(newFilterMovies));
      localStorage.setItem("inputInfo", JSON.stringify(inputInfo));
      localStorage.setItem("shortcut", JSON.stringify(shortcut));
   };

   //Фильтрация массива сохраненных фильмов
   const foundSavedFilms = (inputInfo) => {
      debugger;
      const newFilterMovies = filterMovies(
         moviesSaved,
         inputInfo,
         shortcutSave
      );
      console.log(2);
      console.log(newFilterMovies);
      setSearchSavedMovies(newFilterMovies);
   };

   //Обращение к api для получения информации о пользователе  массива фильмов
   //а так же сохраненных фильмов
   useEffect(() => {
      if (loggedIn) {
         Promise.all([
            api.getContent(),
            moviesApi.getMovies(),
            api.getSavedMovies(),
         ])
            .then(([user, movies, moviesSaved]) => {
               setCurrentUser(user.data);
               setMovies(movies);
               const userMovies = moviesSaved.filter(
                  (movie) => movie.owner === currentUser._id
               );
               setMoviesSaved(userMovies);
               localStorage.setItem("moviesSave", JSON.stringify(userMovies));
               localStorage.setItem("movies", JSON.stringify(movies));
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
                           onMovies={searchMovies}
                           setShortcut={setShortcut}
                           shortcut={shortcut}
                           foundFilms={foundFilms}
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
                           setShortcut={setShortcutSave}
                           shortcut={shortcutSave}
                           foundFilms={foundSavedFilms}
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
