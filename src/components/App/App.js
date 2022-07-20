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
import InfoTooltip from "../InfoTooltip/InfoTooltip";

export default function App() {
   //States
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [loggedIn, setLoggedIn] = useState(false);
   const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
   const [movies, setMovies] = useState(null);
   const [moviesSaved, setMoviesSaved] = useState(null);
   const [shortcut, setShortcut] = useState(false);
   const [shortcutSave, setShortcutSave] = useState(false);
   const [searchMovies, setSearchMovies] = useState([]);
   const [searchSavedMovies, setSearchSavedMovies] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const [infoTooltip, setInfoTooltip] = useState(false);
   const [infoTooltipInfo, setInfoTooltipInfo] = useState({});

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
      //setMoviesSaved(JSON.parse(localStorage.getItem("moviesSave")));
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
            debugger;
            setInfoTooltip(true);
            setInfoTooltipInfo({
               text: "Вы успешно зарегистрировались!",
               class: "success",
            });
            history("/signin");
         })
         .catch((err) => {
            setInfoTooltip(true);
            setInfoTooltipInfo({
               text: "Возникла ошибка регистрации",
               class: "error",
            });
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

   const handleCloseInfoTooltip = () => {
      setInfoTooltip(false);
   };

   //Функция выхода из профиля
   function signOut() {
      localStorage.clear();
      setLoggedIn(false);
      setIsMenuOpen(false);
      setCurrentUser({ name: "", email: "" });
      setMovies(null);
      setMoviesSaved(null);
      setShortcut(false);
      setShortcutSave(false);
      setSearchMovies([]);
      setSearchSavedMovies(null);
      setError("");
   }

   useEffect(() => {
      if (loading) {
         api.getContent()
            .then((user) => {
               setCurrentUser(user.data);
            })
            .catch((err) => {
               setError(err);
               console.log(`Ошибка загрузки данных пользователя ${err}`);
            });
      }
   }, [loggedIn]);

   //Обращение к api для получения информации о пользователе  массива фильмов
   //а так же сохраненных фильмов
   useEffect(() => {
      setLoading(true);
      if (loggedIn) {
         Promise.all([moviesApi.getMovies(), api.getSavedMovies()])
            .then(([movies, moviesSaved]) => {
               setMovies(movies);
               const userMovies = moviesSaved.filter(
                  (movie) => movie.owner === currentUser._id
               );
               setMoviesSaved(userMovies || []);
               localStorage.setItem("moviesSave", JSON.stringify(userMovies));
               localStorage.setItem("movies", JSON.stringify(movies));
               setLoading(false);
            })
            .catch((err) => {
               setError(err);
               console.log(`Ошибка загрузки данных ${err}`);
            });
      }
   }, [currentUser]);

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
      setLoading(true);
      const newFilterMovies = filterMovies(movies, inputInfo, shortcut);
      console.log(1);
      console.log(newFilterMovies);
      setSearchMovies(newFilterMovies);
      localStorage.setItem("foundFilms", JSON.stringify(newFilterMovies));
      localStorage.setItem("inputInfo", JSON.stringify(inputInfo));
      localStorage.setItem("shortcut", JSON.stringify(shortcut));
      localStorage.setItem("count", JSON.stringify(0));
      setTimeout(() => {
         setLoading(false);
      }, 1500);
   };

   //Фильтрация массива сохраненных фильмов
   const foundSavedFilms = (inputInfo) => {
      setLoading(true);
      const newFilterMovies = filterMovies(
         moviesSaved,
         inputInfo,
         shortcutSave
      );
      setSearchSavedMovies(newFilterMovies);
      setTimeout(() => {
         setLoading(false);
      }, 1500);
   };

   const addNewSaveMovie = (movie) => {
      api.addSavedMovies(movie)
         .then((data) => {
            setInfoTooltip(true);
            setInfoTooltipInfo({
               text: "Фильм сохранен!",
               class: "success",
            });
            setMoviesSaved([...moviesSaved, data]);
            localStorage.setItem(
               "moviesSave",
               JSON.stringify([...moviesSaved, data])
            );
         })
         .catch((err) => {
            setInfoTooltip(true);
            setInfoTooltipInfo({
               text: "Возникла ошибка при сохранении фильма",
               class: "error",
            });
            console.log(err);
         });
   };

   const deleteMovie = (id) => {
      const movieDelete = moviesSaved.find((m) => m.movieId === id);

      api.deleteMovie(movieDelete._id).then(() => {
         setInfoTooltip(true);
         setInfoTooltipInfo({
            text: "Фильм успешно удален!",
            class: "success",
         });
         setMoviesSaved(moviesSaved.filter((m) => m._id !== movieDelete._id));
      });
      setSearchSavedMovies(
         moviesSaved.filter((m) => m._id !== movieDelete._id)
      );
      localStorage
         .setItem("moviesSave", JSON.stringify(moviesSaved))
         .catch((err) => {
            setInfoTooltip(true);
            setInfoTooltipInfo({
               text: "Возникла ошибка при удалении фильма",
               class: "error",
            });
            console.log(err);
         });
   };

   return (
      <CurrentUserContext.Provider value={currentUser}>
         <div className="page">
            <Routes>
               <Route
                  path="/"
                  element={
                     <Main
                        loggedIn={loggedIn}
                        onClose={handleEditMenuClose}
                        isOpen={isMenuOpen}
                        onEditMenu={handleEditMenuOpen}
                     />
                  }
               />
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
                           moviesSaved={moviesSaved}
                           addNewMovie={addNewSaveMovie}
                           loading={loading}
                           error={error}
                           deleteMovie={deleteMovie}
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
                           onMovies={moviesSaved}
                           searchSavedMovies={searchSavedMovies}
                           loading={loading}
                           error={error}
                           deleteMovie={deleteMovie}
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
            <InfoTooltip
               onClose={handleCloseInfoTooltip}
               isOpen={infoTooltip}
               props={infoTooltipInfo}
            />
         </div>
      </CurrentUserContext.Provider>
   );
}
