import React, { useEffect, useState } from "react";
import "./More.css";
export default function More({ onClick, onMoviesSlice, onMovies }) {
   const [full, setFull] = useState(false);

   useEffect(() => {
      if (onMovies) {
         if (onMovies.length === onMoviesSlice.length) {
            setFull(true);
         } else {
            setFull(false);
         }
      }
   }, [onMoviesSlice]);

   const MoreClassName = `${full ? "more__disable" : "more"}`;

   return (
      <div className={MoreClassName}>
         <button className="more__button" onClick={onClick}>
            Ещё
         </button>
      </div>
   );
}
