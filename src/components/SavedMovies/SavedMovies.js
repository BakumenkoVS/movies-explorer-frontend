import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

export default function SavedMovies({ isOpen, onEditMenu, onClose }) {
   return (
      <div className="SavedMovies">
         <HeaderMovies onEditMenu={onEditMenu}/>
         <SearchForm />
         <MoviesCardList />
         <Footer />
         <Menu isOpen={isOpen} onClose={onClose} />
      </div>
   );
}
