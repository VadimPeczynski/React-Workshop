import React from "react";

const CheckBox = (props) => {
  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={props.id}
        name={props.name}
        checked={props.value}
        onChange={props.onChange}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default CheckBox;
