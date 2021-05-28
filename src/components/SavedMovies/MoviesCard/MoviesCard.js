import "./MoviesCard.css";
import noImage from "../../../images/kino.png";

const MoviesCard = (props) => {
  const timeConvert = (time) => {
    if (time <= 60) {
      return time + "м";
    } else {
      return Math.floor(time / 60) + " ч " + (time % 60) + " м";
    }
  };
  const handleDeleteMovies = (evt) => {
    evt.preventDefault();
    props.handleRemoveSaveMovie(props.movie._id);
  };

  return (
    <div className="moviesCard">
      <div className="moviesCard__block">
        <h2 className="moviesCard__text">{props.movie.nameRU}</h2>
        <p className="moviesCard__time">{timeConvert(props.movie.duration)}</p>
      </div>
      <button className="moviesCard__button"
              onClick={handleDeleteMovies}
      ></button>
      <a
        className="movieCard__link"
        href={props.movie.trailer}
        target="_blank"
        rel="noreferrer"
      >
      <img className="moviesCard__image"
          src={`${props.movie.image === null ? noImage : props.movie.image}`}
          alt="Обложка фильма"></img>
      </a>
    </div>
  );
};
export default MoviesCard;
