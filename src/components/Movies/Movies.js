import SearchForm from "./SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

const Movies = (props) => {
  let moviesCount;
  let moviesCountNew;

  if (props.windowWidth > 920) {
    moviesCount = 9;
    moviesCountNew = 3;
  } else if (props.windowWidth > 500) {
    moviesCount = 8;
    moviesCountNew = 2;
  } else if (props.windowWidth <= 500) {
    moviesCount = 5;
    moviesCountNew = 2;
  }

  const [numberMovies, setNumberMovies] = useState(moviesCount);

  const nubmerOfMovies = () => {
    setNumberMovies(numberMovies + moviesCountNew);
  };

  useEffect(() => {
    props.handleLogin();
  });
  return (
    <section className="movies">
      <SearchForm
        handleSearch={props.handleSearch}
        value={props.search}
        localStorageMovies={props.localStorageMovies}
        addFilteredMovie={props.addFilteredMovie}
        isToggle={props.isToggle}
        editMovies={props.editMovies}
      />
      {props.isLoaded ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movieCard={
            props.filteredMovies.length !== 0
              ? props.filteredMovies.slice(0, numberMovies)
              : props.localStorageMovies.length !== 0
              ? props.localStorageMovies.slice(0, numberMovies)
              : ""
          }
          isMovies={props.isMovies}
          localStorageMovies={props.localStorageMovies}
          value={props.search}
          filter={props.filteredMovies}
          handleSaveMovie={props.handleSaveMovie}
          savedMovies={props.savedMovies}
          isToggle={props.isToggle}
          removeSavedMovie={props.removeSavedMovie}
        />
      )}
      <div className="movies__block">
        <button
          className={`movies__button ${
            numberMovies >= props.filteredMovies.length &&
            numberMovies >= props.localStorageMovies.length
              ? "movies__button-disable"
              : ""
          }`}
          type="button"
          onClick={nubmerOfMovies}
        >
          ??????
        </button>
      </div>
    </section>
  );
};
export default Movies;
