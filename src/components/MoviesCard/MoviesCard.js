import React from "react";
import "./MoviesCard.css";
import pic1 from "../../images/pic__1.png";
export default function MoviesCard({ movie }) {
   function getTimeFromMins(time) {
      if (time) {
         let hours = Math.trunc(time / 60);
         let minutes = time % 60;
         return hours + "ч " + minutes + "м";
      }
      return
   }

   return (
      <>
         <div className="moviesCard">
            <img
               src={`https://api.nomoreparties.co/${movie?.image.url}`}
               className="moviesCard__img"
               alt="Обложка фильма"
            />
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
