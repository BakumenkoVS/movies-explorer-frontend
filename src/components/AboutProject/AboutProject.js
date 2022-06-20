import "./AboutProject.css";

export default function AboutProject() {
   return (
      <div className="about-project" id="AboutProject">
         <h2 className="title">О проекте</h2>
         <div className="about-project__container">
            <div className="about-project__container_text">
               <h3 className="about-project__subtitle">
                  Дипломный проект включал 5 этапов
               </h3>
               <p className="about-project__text">
                  Составление плана, работу над бэкендом, вёрстку, добавление
                  функциональности и финальные доработки.
               </p>
            </div>
            <div className="about-project__container_text">

            <h3 className="about-project__subtitle">
               На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__text">
               У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
               соблюдать, чтобы успешно защититься.
            </p>
            </div>
         </div>

         <div className="about-project__weeks">
            <div className="about-project__weeks_black">
               <p className="about-project__week">1 неделя</p>
               <p className="about-project__weeks-text">Back-end</p>
            </div>
            <div className="about-project__weeks_gray">
               <p className="about-project__week about-project__week_gray">
                  4 недели
               </p>
               <p className="about-project__weeks-text">Front-end</p>
            </div>
         </div>
      </div>
   );
}
