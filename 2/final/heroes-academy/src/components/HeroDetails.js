import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHeroById } from "../api/heroesApi";

function HeroDetails(props) {
  const id = props.match.params.id;
  const [hero, setHero] = useState({});

  useEffect(() => {
    getHeroById(id).then((_hero) => {
      debugger;
      setHero(_hero);
    });
  }, [id]);

  if (!hero) {
    return null;
  }

  return (
    <div className="card">
      <h5 className="card-header">Informacje o herosie</h5>
      <div className="card-body">
        <p>Nazwa herosa: {hero.name}</p>
      </div>
      <div className="card-footer">
        <Link type="button" className="btn btn-outline-secondary" to="/heroes">
          <i className="fa fa-chevron-left"></i> Powrót
        </Link>
      </div>
    </div>
  );
}

export default HeroDetails;
