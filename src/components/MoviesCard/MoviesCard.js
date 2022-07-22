import React from "react";
import "./MoviesCard.css";
import pic1 from "../../images/pic__1.png";
export default function MoviesCard({ img, title, time }) {
   return (
      <>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like moviesCard__like_active">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like moviesCard__delete">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
         <div className="moviesCard">
            <img src={pic1} className="moviesCard__img" alt="Обложка фильма" />
            <div className="moviesCard__container">
               <h2 className="moviesCard__title">33 слова о дизайне</h2>
               <button className="moviesCard__like">
               </button>
            </div>
            <p className="moviesCard__time">1ч 42м</p>
         </div>
      </>
   );
}
