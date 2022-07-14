import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function SavedMovies({
   isOpen,
   onEditMenu,
   onClose,
   setShortcut,
   shortcut,
   foundFilms,
   onMovies
}) {

   const item = () => {
      if (onMovies) {
         return onMovies
            .map((movie) => (
               <MoviesCard movie={movie} key={`movie${movie.id}`} />
            ))
      }
   };
   return (
      <div className="SavedMovies">
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
         <MoviesCardList onMovies={item()}/>
         <Footer />
      </div>
   );
}
