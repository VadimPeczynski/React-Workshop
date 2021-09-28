import React from "react";
import "../styles/fist.css";

const Fist = (props) => {
  return (
    <div className="crop" style={{ width: props.strength?(60 / 5) * props.strength:0 }} title={props.strength}>
      <div className="fists">
        <span className="fas fa-fist-raised"></span>
        <span className="fas fa-fist-raised"></span>
        <span className="fas fa-fist-raised"></span>
        <span className="fas fa-fist-raised"></span>
        <span className="fas fa-fist-raised"></span>
      </div>
    </div>
  );
};

export default Fist;
