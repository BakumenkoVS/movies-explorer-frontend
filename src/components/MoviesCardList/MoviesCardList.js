import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "./../MoviesCard/MoviesCard";

export default function MoviesCardList({ onMovies }) {
   const item = () => {
      if (onMovies) {
         return onMovies.map((movie) => (
            <MoviesCard movie={movie} key={`movie${movie.id}`} />
         ));
      }
   };
   return <div className="moviesCardList">{item()}</div>;
}
