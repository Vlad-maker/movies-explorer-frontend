import "./SearchForm.css";
import icon from "../../../images/find.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

const SearchForm = (props) => {
  const [filterCheck, setFilterCheck] = useState(false);

  const checkBoxToggle = () => {
    setFilterCheck(!filterCheck);
  }

  const handleFilter = (movieList, movieSearch) => {
    const filtered = movieList.nameRU
      .toLowerCase()
      .includes(movieSearch.toLowerCase());
    return filtered;
  };

  const handleSavedMoviesFilter = (savedMovieList, savedMovieSearch) => {
    const savedFiltered = savedMovieList.nameRU
      .toLowerCase()
      .includes(savedMovieSearch.toLowerCase());
    return savedFiltered;
  };

  const filterMoviesArray = (movieList, value) => {
    if (filterCheck) {
      const shortMovie = movieList.filter((movie) => {
        return movie.duration <= 40 && handleFilter(movie, value);
      });
      return shortMovie;
    } else {
      const filteredMovies = movieList.filter((movie) => {
        return handleFilter(movie, value);
      });
      return filteredMovies;
    }
  };

  const filterSavedMoviesArray = (savedMovieList, savedMovieSearch) => {
    if (filterCheck) {
      const shortSavedMovie = savedMovieList.filter((movie) => {
        return (
          movie.duration <= 40 && handleSavedMoviesFilter(movie, savedMovieSearch)
        );
      });
      return shortSavedMovie;
    } else {
      const filteredSavedMovies = savedMovieList.filter((movie) => {
        return handleSavedMoviesFilter(movie, savedMovieSearch);
      });
      return filteredSavedMovies;
    }
  };
  
const handleSubmit = (e) => {
     e.preventDefault();
    const filteredMoviesArray = filterMoviesArray(props.localStorageMovies, props.value);
    props.addFilteredMovie(filteredMoviesArray);
  };

  const handleSubmitSave = (e) => {
    e.preventDefault();
    let filteredSavedMoviesArray = filterSavedMoviesArray(
      props.savedMovies,
      props.savedSearch
    );
    props.updateFilteredSavedMovies(filteredSavedMoviesArray);
  };

  return (
    <section className="searchForm">
      <div className="searchForm__container">
        <form className="searchForm__search" onSubmit={props.isToggle ? handleSubmitSave : handleSubmit}>
          <input
            className="searchForm__film"
            placeholder="Фильм"
            size="30"
            value={props.isToggle ?  props.savedSearch : props.value}
            onChange={props.isToggle ? props.handleSearchSaved : props.handleSearch}
          ></input>
          <button className="searchForm__button" onClick={props.editMovies} type="submit">
            <img className="searchForm__image" src={icon} alt="иконка"></img>
          </button>
        </form>
        <div className="searchForm__block">
          <p className="searchForm__text">Короткометражки</p>
          <FilterCheckbox onChange={checkBoxToggle} />
        </div>
      </div>
    </section>
  );
};
export default SearchForm;
