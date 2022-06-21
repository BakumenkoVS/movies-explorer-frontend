import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import Footer from "../Footer/Footer";

export default function SavedMovies({ isOpen, onEditMenu, onClose }) {
   return (
      <div className="SavedMovies">
         <HeaderMovies onEditMenu={onEditMenu} isOpen={isOpen} onClose={onClose}/>
         <SearchForm />
         <MoviesCardList />
         <Footer />
      </div>
   );
}
