import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = () => {
  return (
    <section className="MoviesCardList">
      <div className="MoviesCardList__container-movies">
      <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
      </div>
    </section>
  );
};
export default MoviesCardList;