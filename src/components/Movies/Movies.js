import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import { Link, Route, Routes } from "react-router-dom";
import SearchForm from './../SearchForm/SearchForm';
import MoviesCardList from './../MoviesCardList/MoviesCardList';
import More from './../More/More';
export default function Movies() {
   return (
      <div className="movies">
         <SearchForm />
         <MoviesCardList />
         <More />
      </div>
   );
}
