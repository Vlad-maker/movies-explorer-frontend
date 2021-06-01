import { useEffect } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import SavedMoviesCard from "../SavedMovies/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

const SavedMovies = (props) => {
  useEffect(() => {
    props.handleLoggenIn();
  });

  return (
    <section className="savedMovies">
      <SearchForm
        handleSearchSaved={props.handleSearchSaved}
        isToggle={props.isToggle}
        savedSearch={props.savedSearch}
        updateFilteredSavedMovies={props.updateFilteredSavedMovies}
        savedMovies={props.savedMovies}
      />
      {props.isLoaded ? (
        <Preloader />
      ) : (
        <SavedMoviesCard
          savedMovies={props.savedMovies}
          handleRemoveSaveMovie={props.handleRemoveSaveMovie}
          isToggle={props.isToggle}
          filteredSavedMovieList={props.filteredSavedMovieList}
        />
      )}
    </section>
  );
};
export default SavedMovies;
