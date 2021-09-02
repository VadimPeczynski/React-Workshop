import React from "react";

const HeroLogo = (props) => {
  return props.showImage ? (
    <img className="image" src={props.hero.logoUrl} alt={props.hero.name} />
  ) : (
    <></>
  );
};

export default HeroLogo;
