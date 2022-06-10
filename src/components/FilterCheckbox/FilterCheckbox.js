import React from "react";
import "./FilterCheckbox.css";
export default function FilterCheckbox() {
   return (
      <div className="filter-checkbox">
         <h2 className="filter-checkbox__title">Короткометражки</h2>
         <div className="filter-checkbox__group">
            <input
               type="checkbox"
               className="filter-checkbox__input"
               id="filter-checkbox__input"
            />
            <label for="filter-checkbox__input" className="filter-checkbox__label"></label>
         </div>
      </div>
   );
}
