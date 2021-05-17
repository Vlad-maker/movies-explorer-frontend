import { useEffect } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCard from '../SavedMovies/MoviesCardList/MoviesCardList';
import './SavedMovies.css'

const SavedMovies = (props) => {

    useEffect(() => {
        props.handleLoggenIn();
    });

    return(
        <section className="SavedMovies">
            <SearchForm />
            <SavedMoviesCard />
        </section>
    );
}
export default SavedMovies;