import React from "react";
import PropTypes from "prop-types";

const Select = (props) => {
  let selectClass = "form-control";
  if (props.touched && props.error) {
    selectClass += " is-invalid";
  }
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <select
        id={props.id}
        name={props.name}
        className={selectClass}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        <option value="" disabled hidden>
          Wybierz
        </option>
        {props.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {props.touched && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

Select.defaultProps = {
  error: "",
};

export default Select;
