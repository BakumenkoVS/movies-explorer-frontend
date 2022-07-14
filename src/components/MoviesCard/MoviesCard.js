import React from "react";
import "./MoviesCard.css";
import { Link } from "react-router-dom";
export default function MoviesCard({ movie }) {
   function getTimeFromMins(time) {
      if (time) {
         let hours = Math.trunc(time / 60);
         let minutes = time % 60;
         return hours + "ч " + minutes + "м";
      }
      return;
   }
   return (
      <>
         <div
            className="moviesCard"
            movie={movie}
            href="https://github.com/BakumenkoVS/react-mesto-api-full"
            target="blank"
         >
            <a
               href={movie.trailerLink}
               target="blank"
            >
               <img
                  src={`https://api.nomoreparties.co/${movie?.image.url}`}
                  className="moviesCard__img"
                  alt="Обложка фильма"
               />
            </a>

            <div className="moviesCard__container">
               <h2 className="moviesCard__title">{movie?.nameRU}</h2>
               <button className="moviesCard__like moviesCard__like_active"></button>
            </div>
            <p className="moviesCard__time">
               {getTimeFromMins(movie?.duration)}
            </p>
         </div>
      </>
   );
}
