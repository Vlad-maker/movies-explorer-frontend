import "./MoviesCard.css";
import photo from "../../../images/kino.png";

const MoviesCard = (props) => {
  return (
    <div className="MoviesCard">
      
      <div className="MoviesCard__block">
        <h2 className="MoviesCard__text">{props.title}</h2>
        <button className="MoviesCard__like cards__like_inactive"></button>
      </div>
      <p className="MoviesCard__time">1ч 42м</p>
      <img className="MoviesCard__image" src={photo} alt="Обложка фильма"></img>
    </div>
  );
};
export default MoviesCard;
