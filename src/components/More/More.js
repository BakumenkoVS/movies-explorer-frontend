import React from "react";
import "./More.css";
export default function More({onClick}) {
   return (
      <div className="more">
         <button className="more__button" onClick={onClick}>Ещё</button>
      </div>
   );
}
