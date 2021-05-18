import "./MoviesCard.css";
import photo from "../../../images/kino.png";

const MoviesCard = (props) => {
  return (
    <div className="moviesCard">
      
      <div className="moviesCard__block">
        <h2 className="moviesCard__text">{props.title}</h2>
        <button className="moviesCard__button"></button>
      </div>
      <p className="moviesCard__time">1ч 42м</p>
      <img className="moviesCard__image" src={photo} alt="Обложка фильма"></img>
    </div>
  );
};
export default MoviesCard;
