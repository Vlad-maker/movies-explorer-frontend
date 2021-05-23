import SearchForm from "./SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { useEffect } from "react";

const Movies = (props) => {
  useEffect(() => {
    props.handleLoggedIn();
  });
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <div className="movies__block">
        <button className="movies__button">Ещё</button>
      </div>
    </section>
  );
};
export default Movies;
