import React from "react";
import "./MoviesCard.css";
import { Link, useLocation } from "react-router-dom";
export default function MoviesCard({ movie, moviesSaved, addNewMovie }) {
   const location = useLocation();
   

   function getTimeFromMins(time) {
      if (time) {
         let hours = Math.trunc(time / 60);
         let minutes = time % 60;
         return hours + "ч " + minutes + "м";
      }
      return;
   }

   const handleNewMovie = (e) => {
      debugger;
      e.preventDefault();
      addNewMovie(movie);
   };

   const isLiked = moviesSaved.some((item) => {
      return item.movieId === movie.id;
   });

   return (
      <>
         <div className="moviesCard" movie={movie}>
            <a href={movie?.trailerLink} target="blank">
               {location.pathname === "/movies" && (
                  <img
                     src={`https://api.nomoreparties.co/${movie?.image.url}`}
                     className="moviesCard__img"
                     alt={`Обложка фильма ${movie?.nameRU}`}
                  />
               )}
               {location.pathname === "/saved-movies" && (
                  <img
                     src={movie?.image}
                     className="moviesCard__img"
                     alt={`Обложка фильма ${movie?.nameRU}`}
                  />
               )}
            </a>

            <div className="moviesCard__container">
               <h2 className="moviesCard__title">{movie?.nameRU}</h2>
               {location.pathname === "/movies" && (
                  <button
                     className={
                        isLiked
                           ? "moviesCard__like moviesCard__like_active"
                           : "moviesCard__like"
                     }
                     onClick={handleNewMovie}
                  ></button>
               )}
               {location.pathname === "/saved-movies" && (
                  <button className="moviesCard__like moviesCard__delete"></button>
               )}
            </div>

            <p className="moviesCard__time">
               {getTimeFromMins(movie?.duration)}
            </p>
         </div>
      </>
   );
}
