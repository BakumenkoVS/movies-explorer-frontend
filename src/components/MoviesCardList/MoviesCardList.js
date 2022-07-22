import React from "react";
import "./MoviesCardList.css";

export default function MoviesCardList({ onMovies, error }) {
   const renderList = () => {

      if (error || onMovies) {
         if (error) {
            debugger
            return (
               <p className="MoviesCardList__message">
                  Во время запроса произошла ошибка. Возможно, проблема с
                  соединением или сервер недоступен. Подождите немного и
                  попробуйте ещё раз
               </p>
            );
         } else if (onMovies.length === 0) {
            return <p className="MoviesCardList__message">Ничего не найдено</p>;
         } else {
            return onMovies;
         }
      }
   };

   return <div className="moviesCardList">{renderList()}</div>;
}
