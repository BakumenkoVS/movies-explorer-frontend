import React from "react";
import "./MoviesCardList.css";

export default function MoviesCardList({ onMovies }) {
   //const [item, setItem] = useState([])
   // const item = () => {
   //    if (onMovies) {
   //       return onMovies.map((movie) => (
   //          <MoviesCard movie={movie} key={`movie${movie.id}`} />
   //       )).slice(0);
   //    }
   // };

   // useEffect(() => {
   //    const item = () => {
   //       if (localStorage.getItem("movies") !== "undefined") {
   //          console.log(2);

   //          return JSON.parse(localStorage.getItem("movies")).map((movie) => (
   //             <MoviesCard movie={movie} key={`movie${movie.id}`} />
   //          ));
   //       }
   //    };
   //    setItem(item())
   // }, [data]);

   // const itemList = item();

   return <div className="moviesCardList">{onMovies}</div>;
}
