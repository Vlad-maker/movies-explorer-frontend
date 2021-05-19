import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container-movies moviesCardList__container-low">
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
      </div>
    </section>
  );
};

export default MoviesCardList;
