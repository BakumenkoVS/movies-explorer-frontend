import "./Footer.css";

export default function Footer() {
   return (
      <div className="footer">
         <h2 className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
         </h2>
         <div className="footer__container">
            <div className="footer__links">
               <a
                  href="https://practicum.yandex.ru/"
                  className="footer__link"
                  target="blank"
               >
                  Яндекс.Практикум
               </a>
               <a
                  href="https://github.com/BakumenkoVS"
                  className="footer__link"
                  target="blank"
               >
                  Github
               </a>
               <a
                  href="https://t.me/BakumenkoVS"
                  className="footer__link"
                  target="blank"
               >
                  Telegram
               </a>
            </div>

            <p className="footer__year">&copy;2022</p>
         </div>
      </div>
   );
}
