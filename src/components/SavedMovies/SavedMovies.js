import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

export default function SavedMovies({
   isOpen,
   onEditMenu,
   onClose,
   setShortcut,
   shortcut,
   foundFilms,
   onMovies,
   searchSavedMovies,
   loading,
   error,
   deleteMovie,
}) {
   const item = (data) => {
      return data.map((movie) => (
         <MoviesCard
            movie={movie}
            key={`movie${movie.id}`}
            moviesSaved={data}
            deleteMovie={deleteMovie}
         />
      ));
   };

   const render = () => {
      if (searchSavedMovies) {
         return item(searchSavedMovies);
      } else {
         return item(onMovies);
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
         <MoviesCardList
            onMovies={loading ? <Preloader /> : render()}
            error={error}
         />
         <Footer />
      </div>
   );
}
