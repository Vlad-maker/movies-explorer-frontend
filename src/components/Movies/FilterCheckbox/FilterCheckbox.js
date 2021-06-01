import "./FilterCheckbox.css";

const FilterCheckbox = (props) => {
  return (
      <label className="switch" onChange={props.onChange}>
            <input type="checkbox"></input>
            <span className="slider round"></span>
      </label>
  );
};
export default FilterCheckbox;
