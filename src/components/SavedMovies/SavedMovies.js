import { useEffect } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCard from '../SavedMovies/MoviesCardList/MoviesCardList';
import './SavedMovies.css'

const SavedMovies = (props) => {

    useEffect(() => {
        props.handleLoggedIn();
    });

    return(
        <section className="savedMovies">
            <SearchForm />
            <SavedMoviesCard />
        </section>
    );
}
export default SavedMovies;