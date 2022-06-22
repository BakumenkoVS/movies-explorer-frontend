import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
export default function NotFound() {
   const history = useNavigate();
   const goBack = () => history(-1);
   return (
      <div className="notFound">
         <h2 className="notFound__title">404</h2>
         <p className="notFound__subtitle">Страница не найдена</p>
         <button onClick={goBack} className="notFound__link">
            Назад
         </button>
      </div>
   );
}
