import "./Promo.css";
import promo_logo_img from "../../images/promo-logo.svg";
export default function Promo() {
   return (
      <div className="promo">
         <img
            src={promo_logo_img}
            alt="Логотип практикума"
            className="promo__logo"
         />
         <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
         </h1>
      </div>
   );
}
