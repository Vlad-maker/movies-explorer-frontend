import "./SearchForm.css";
import icon from '../../../images/find.svg'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


const SearchForm = () => {
  return (
    <section className="SearchForm">
      <div className="SearchForm__container">
          <label className="SearchForm__search" >
              <input className="SearchForm__film"  placeholder="Фильм" size="30"></input>
              <button className="SearchForm__circle"><img className="SearchFrom__image" src={icon} alt="иконка"></img></button>
          </label>
          <div className="SearchFrom__block">
              <p className="SearchFrom__text">Короткометражки</p>
              <FilterCheckbox />
          </div>
      </div>
    </section>
  );
};
export default SearchForm;

