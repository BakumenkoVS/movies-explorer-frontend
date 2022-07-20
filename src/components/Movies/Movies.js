import React, { useEffect, useState } from "react";
import "./Movies.css";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import SearchForm from "./../SearchForm/SearchForm";
import MoviesCardList from "./../MoviesCardList/MoviesCardList";
import More from "./../More/More";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useCallback } from "react";
import Preloader from "../Preloader/Preloader";
export default function Movies({
   isOpen,
   onEditMenu,
   onClose,
   onMovies,
   setShortcut,
   shortcut,
   foundFilms,
   moviesSaved,
   addNewMovie,
   loading,
   error,
   deleteMovie,
}) {
   const [count, setCount] = useState(
      JSON.parse(localStorage.getItem("count")) || 0
   );

   useEffect(() => {
      handlePaginationCount();
   }, [window.innerWidth]);

   const timeoutResize = useCallback(() => {
      const timer = setTimeout(() => {
         handlePaginationCount();
      }, 2000);
      return () => {
         clearTimeout(timer);
      };
   }, []);

   useEffect(() => {
      window.addEventListener("resize", timeoutResize);
      return () => {
         window.removeEventListener("resize", () => timeoutResize);
      };
   }, [timeoutResize]);

   const item = () => {
      if (onMovies) {
         return onMovies
            .map((movie) => (
               <MoviesCard
                  movie={movie}
                  key={`movie${movie.id}`}
                  moviesSaved={moviesSaved}
                  addNewMovie={addNewMovie}
                  deleteMovie={deleteMovie}
               />
            ))
            .slice(0, count);
      }
   };

   const handlePaginationCount = () => {
      if (count === 0) {
         if (window.innerWidth >= 320) {
            setCount(5);
         }
         if (window.innerWidth >= 768) {
            setCount(4);
         }
         if (window.innerWidth >= 1037) {
            setCount(6);
         }
         if (window.innerWidth >= 1280) {
            setCount(4);
         }
      } else {
         return setCount(count);
      }
   };

   const handleClick = () => {
      if (window.innerWidth >= 320) {
         setCount(count + 5);
      }
      if (window.innerWidth >= 768) {
         setCount(count + 4);
      }
      if (window.innerWidth >= 1037) {
         setCount(count + 6);
      }
      if (window.innerWidth >= 1280) {
         setCount(count + 4);
      }
   };

   return (
      <div className="movies">
         <HeaderMovies
            onEditMenu={onEditMenu}
            isOpen={isOpen}
            onClose={onClose}
         />
         <SearchForm
            setShortcut={setShortcut}
            shortcut={shortcut}
            foundFilms={foundFilms}
         />
         <MoviesCardList
            onMovies={loading ? <Preloader /> : item()}
            error={error}
         />
         <More
            onClick={handleClick}
            onMoviesSlice={item()}
            onMovies={onMovies}
         />
         <Footer />
      </div>
   );
}
