import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HederMovies from "../HeaderMovies/HeaderMovies";
import Footer from "../Footer/Footer";

export default function SavedMovies() {
   return (
      <div className="SavedMovies">
         <HederMovies />
         <SearchForm />
         <MoviesCardList />
         <Footer />
      </div>
   );
}
