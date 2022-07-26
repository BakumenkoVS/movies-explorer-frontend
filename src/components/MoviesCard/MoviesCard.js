import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
export default function MoviesCard({
   movie,
   moviesSaved,
   addNewMovie,
   deleteMovie,
}) {
   const location = useLocation();

   function getTimeFromMins(time) {
      if (time) {
         let hours = Math.trunc(time / 60);
         let minutes = time % 60;
         return hours + "ч " + minutes + "м";
      }
      return;
   }

   const handleMovieClick = (e) => {
      e.preventDefault();
      if (isLiked) {
         deleteMovie(movie.id);
      } else {
         addNewMovie(movie);
      }
   };

   const handleMovieClickDelete = (e) => {
      deleteMovie(movie.movieId);
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
                     onClick={handleMovieClick}
                  ></button>
               )}
               {location.pathname === "/saved-movies" && (
                  <button
                     onClick={handleMovieClickDelete}
                     className="moviesCard__like moviesCard__delete"
                  ></button>
               )}
            </div>

            <p className="moviesCard__time">
               {getTimeFromMins(movie?.duration)}
            </p>
         </div>
      </>
   );
}
