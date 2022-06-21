import React from "react";
import "./Movies.css";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import SearchForm from "./../SearchForm/SearchForm";
import MoviesCardList from "./../MoviesCardList/MoviesCardList";
import More from "./../More/More";
import Footer from "../Footer/Footer";
export default function Movies({isOpen, onEditMenu, onClose}) {
   return (
      <div className="movies">
         <HeaderMovies onEditMenu={onEditMenu} isOpen={isOpen} onClose={onClose}/>
         <SearchForm />
         <MoviesCardList />
         <More />
         <Footer />
      </div>
   );
}
