import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = (props) => {
  return (
    <section className="moviesCardList">
      {props.filteredSavedMovieList.length !== 0 ? (
        <div className="moviesCardList__container-movies moviesCardList__container-low">
          {props.filteredSavedMovieList.map((item) => {
            return (
              <MoviesCard
                key={item._id}
                movie={item}
                removeSavedMovie={props.removeSavedMovie}
                isToggle={props.isToggle}
              />
            );
          })}
        </div>
      ) : (
        <p className="text__error text__error-saved">
          У вас нет сохраненных фильмов c таким названием
        </p>
      )}
    </section>
  );
};

export default MoviesCardList;
