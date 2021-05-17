import SearchForm from "./SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { useEffect } from "react";

const Movies = (props) => {
  useEffect(() => {
    props.handleLoggenIn();
  });
  return (
    <section className="Movies">
      <SearchForm />
      <MoviesCardList />
      <div className="Movies__block">
        <button className="Movies__button">Ещё</button>
      </div>
    </section>
  );
};
export default Movies;
