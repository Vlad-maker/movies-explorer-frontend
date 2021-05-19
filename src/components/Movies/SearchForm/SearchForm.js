import "./SearchForm.css";
import icon from '../../../images/find.svg'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


const SearchForm = () => {
  return (
    <section className="searchForm">
      <div className="searchForm__container">
          <label className="searchForm__search" >
              <input className="searchForm__film"  placeholder="Фильм" size="30"></input>
              <button className="searchForm__button"><img className="searchForm__image" src={icon} alt="icon"></img></button>
          </label>
          <div className="searchForm__block">
              <p className="searchForm__text">Короткометражки</p>
              <FilterCheckbox />
          </div>
      </div>
    </section>
  );
};
export default SearchForm;

