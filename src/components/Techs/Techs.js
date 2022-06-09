import "./Techs.css";


export default function Techs() {
   return (
      <div className="techs" name="Techs">
         <h2 className="title">Технологии</h2>
         <h3 className="techs__subtitle">7 технологий</h3>
         <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
         </p>
         <div className="techs__grid">
            <p className="techs__grid_item">HTML</p>
            <p className="techs__grid_item">CSS</p>
            <p className="techs__grid_item">JS</p>
            <p className="techs__grid_item">React</p>
            <p className="techs__grid_item">Git</p>
            <p className="techs__grid_item">Express.js</p>
            <p className="techs__grid_item">mongoDB</p>
         </div>
      </div>
   );
}