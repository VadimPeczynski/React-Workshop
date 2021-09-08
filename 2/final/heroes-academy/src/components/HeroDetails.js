import React, { useEffect, useState } from "react";
import { getHeroById } from "../api/heroesApi";
import { Link } from "react-router-dom";

const HeroDetails = (props) => {
  const id = props.match.params.id;
  const [hero, setHero] = useState([]);

  useEffect(() => {
    getHeroById(id).then((_hero) => {
      setHero(_hero);
    });
  }, [id]);

  return (
    <div className="card">
      <h5 className="card-header">Informacje o herosie</h5>
      <div className="card-footer">
        <p>Nazwa herosa: {hero.name}</p>
        <Link type="button" className="btn btn-outline-secondary" to="/heroes">
          <i className="fa fa-chevron-left"></i> Powrót
        </Link>
      </div>
    </div>
  );
};

export default HeroDetails;
