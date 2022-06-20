import "./AboutMe.css";
import me from "../../images/123.png";

export default function AboutMe() {
   return (
      <div className="about-me" id="AboutMe">
         <h2 className="title">Студент</h2>

         <div className="about-me__container">
            <img src={me} className="about-me__img"></img>

            <div className="about-me__container_content">
               <h3 className="about-me__name">Владислав</h3>
               <p className="about-me__subtitle">
                  Фронтенд-разработчик, 24 года
               </p>
               <p className="about-me__text">
                  Я родился и живу в Саратове, закончил факультет экономики СГУ.
                  У меня есть жена и дочь. Я люблю слушать музыку, а ещё
                  увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
                  компании «СКБ Контур». После того, как прошёл курс по
                  веб-разработке, начал заниматься фриланс-заказами и ушёл с
                  постоянной работы.
               </p>
               <div className="about-me__links">
                  <a href="https://t.me/BakumenkoVS" className="about-me__link">
                     Telegram
                  </a>
                  <a
                     href="https://github.com/BakumenkoVS"
                     className="about-me__link"
                  >
                     Github
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
