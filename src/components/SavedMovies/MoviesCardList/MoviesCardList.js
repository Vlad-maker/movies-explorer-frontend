import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <section className="MoviesCardList">
      <div className="MoviesCardList__container-movies MoviesCardList__container-low">
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
      </div>
    </section>
  );
};

export default MoviesCardList;
