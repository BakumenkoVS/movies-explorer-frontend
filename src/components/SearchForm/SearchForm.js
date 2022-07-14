import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import iconButton from "../../images/button_icon.svg";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";
export default function SearchForm({
   setShortcut,
   shortcut,
   foundFilms,
}) {
   const [name, setName] = useState("");
   const location = useLocation();
   useEffect(() => {
      if (location.pathname === "/movies") {
         setName(JSON.parse(localStorage.getItem("inputInfo")));
      }
   }, []);

   return (
      <div className="search-form">
         <form
            className="search-form__form"
            onSubmit={(e) => {
               e.preventDefault();
               foundFilms(name);
            }}
         >
            <input
               type="text"
               className="search-form__input"
               placeholder="Фильм"
               required
               minLength="1"
               value={name || ""}
               onChange={(e) => {
                  setName(e.target.value);
               }}
            />
            <button className="search-form__button">
               <img src={iconButton} alt="Иконка лупы" />
            </button>
         </form>
         <FilterCheckbox setShortcut={setShortcut} shortcut={shortcut} />
      </div>
   );
}
