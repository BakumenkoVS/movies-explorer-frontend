import React from "react";
import "./SearchForm.css";
import iconButton from "../../images/button_icon.svg";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox";
export default function SearchForm() {
   return (
      <div className="search-form">
         <form className="search-form__form">
            <input
               type="text"
               className="search-form__input"
               placeholder="Фильм"
               required
               minLength="1"
            />
            <button className="search-form__button">
               <img src={iconButton} alt="Иконка лупы" />
            </button>
         </form>
         <FilterCheckbox />
      </div>
   );
}
