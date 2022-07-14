import React, { useEffect, useState } from "react";
import "./Movies.css";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import SearchForm from "./../SearchForm/SearchForm";
import MoviesCardList from "./../MoviesCardList/MoviesCardList";
import More from "./../More/More";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useCallback } from "react";
export default function Movies({
   isOpen,
   onEditMenu,
   onClose,
   onMovies,
   setShortcut,
   shortcut,
   foundFilms,
}) {
      
   const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) || 0);

   // const [x, setX] = useState([]);
   // const results = () => {
   //    if (onMovies && data) {
   //       return onMovies.filter((item) => {
   //          return shortcut
   //             ? item.nameRU.toLowerCase().includes(`${data.toLowerCase()}`) &&
   //                  item.duration < 40
   //             : item.nameRU.toLowerCase().includes(`${data.toLowerCase()}`);
   //       });
   //    }
   // };

   // const zz = results();

   // if (false) {
   //    debugger;
   //    localStorage.setItem("movies", JSON.stringify(filterList));
   // }

   // useEffect(() => {
   //    const results = () => {
   //       if (onMovies && data) {
   //          return onMovies.filter((item) => {
   //             return shortcut
   //                ? item.nameRU
   //                     .toLowerCase()
   //                     .includes(`${data.toLowerCase()}`) && item.duration < 40
   //                : item.nameRU.toLowerCase().includes(`${data.toLowerCase()}`);
   //          });
   //       }
   //    };
   // }, [data, shortcut]);

   useEffect(() => {
      handlePaginationCount();
   }, [window.innerWidth]);



   const timeout = useCallback(() => {
      const timer = setTimeout(() => {
         handlePaginationCount();
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    useEffect(() => {
      window.addEventListener("resize", timeout);
      return () => {
        window.removeEventListener("resize", () => timeout);
      };
    }, [timeout]);


   const item = () => {
      if (onMovies) {
         return onMovies
            .map((movie) => (
               <MoviesCard movie={movie} key={`movie${movie.id}`} />
            ))
            .slice(0, count);
            console.log(count)
      }
   };

   const handlePaginationCount = () => {
      if (count === 0) {
         if (window.innerWidth >= 320) {
            setCount(5);
         }
         if (window.innerWidth >= 768) {
            setCount(4);
         }
         if (window.innerWidth >= 1280) {
            setCount(4);
         }
      } else {
         return setCount(count);
      }
   };

   const handleClick = () => {
      if (window.innerWidth >= 320) {
         setCount(count + 5);
      }
      if (window.innerWidth >= 768) {
         setCount(count + 4);
      }
      if (window.innerWidth >= 1280) {
         setCount(count + 4);
      }
   };

   return (
      <div className="movies">
         <HeaderMovies
            onEditMenu={onEditMenu}
            isOpen={isOpen}
            onClose={onClose}
         />
         <SearchForm
            setShortcut={setShortcut}
            shortcut={shortcut}
            foundFilms={foundFilms}
         />
         <MoviesCardList onMovies={item()} />
         <More onClick={handleClick}/>
         <Footer />
      </div>
   );
}
