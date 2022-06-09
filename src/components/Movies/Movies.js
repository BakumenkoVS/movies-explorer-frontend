import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import { Link, Route, Routes } from "react-router-dom";
import SearchForm from './../SearchForm/SearchForm';
export default function Movies() {
   return (
      <div className="movies">
         <SearchForm />
      </div>
   );
}
