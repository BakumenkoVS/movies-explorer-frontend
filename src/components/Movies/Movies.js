import React from "react";
import "./Movies.css";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import SearchForm from "./../SearchForm/SearchForm";
import MoviesCardList from "./../MoviesCardList/MoviesCardList";
import More from "./../More/More";
import Footer from "../Footer/Footer";
export default function Movies() {
   return (
      <div className="movies">
         <HeaderMovies />
         <SearchForm />
         <MoviesCardList />
         <More />
         <Footer />
      </div>
   );
}
