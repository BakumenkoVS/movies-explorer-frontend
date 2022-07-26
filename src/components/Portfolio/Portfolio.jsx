import "./Portfolio.css";
import icon from "../../images/ikon_link.svg";
export default function Portfolio() {
   return (
      <div className="portfolio">
         <h2 className="portfolio__title">Портфолио</h2>
         <div className="portfolio__links">
            <a
               className="portfolio__link"
               href="https://github.com/BakumenkoVS/how-to-learn"
               target="blank"
            >
               Статичный сайт
               <img
                  src={icon}
                  alt="Иконка ссылки"
                  className="portfolio__link-ikon"
               />
            </a>
            <a
               className="portfolio__link"
               href="https://github.com/BakumenkoVS/russian-travel"
               target="blank"
            >
               Адаптивный сайт
               <img
                  src={icon}
                  alt="Иконка ссылки"
                  className="portfolio__link-ikon"
               />
            </a>
            <a
               className="portfolio__link"
               href="https://github.com/BakumenkoVS/react-mesto-api-full"
               target="blank"
            >
               Одностраничное приложение
               <img
                  src={icon}
                  alt="Иконка ссылки"
                  className="portfolio__link-ikon"
               />
            </a>
         </div>
      </div>
   );
}
