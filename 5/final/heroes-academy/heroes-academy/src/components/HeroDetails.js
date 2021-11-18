import React from "react";
import { Link } from "react-router-dom";
import Fist from "./Fist";
import { useSelector } from "react-redux";

const HeroDetails = (props) => {
  const id = props.match.params.id;
  const hero = useSelector((state) => {
    return state.heroes.data.find((hero) => {
      return hero.id == id;
    });
  });

  if (!hero) {
    return null;
  }
  return (
    <div className="card">
      <div className="card-header">{"Informacje o herosie: " + hero.name}</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3 text-left">Nazwa:</div>
              <div className="col-md-6 text-left">{hero.name}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">Team:</div>
              <div className="col-md-6 text-left">{hero.team}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">Tożsamość:</div>
              <div className="col-md-6 text-left">{hero.secretIdentity}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">Opis:</div>
              <div className="col-md-6 text-left">{hero.description}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">Wynagrodzenie:</div>
              <div className="col-md-6 text-left">{hero.salary} PLN</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">Siła:</div>
              <div className="col-md-6 text-left">
                <Fist strength={hero.strength}></Fist>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img
              className="img-responsive"
              style={{ width: 200, margin: 2 }}
              src={hero.logoUrl}
              title={hero.name}
              alt={hero.name}
            />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <Link type="button" className="btn btn-outline-secondary" to="/heroes">
          <i className="fa fa-chevron-left"></i> Powrót
        </Link>
        <Link
          type="button"
          className="btn btn-outline-success mx-3"
          to={"/hero-edit/" + hero.id}
        >
          Edycja herosa
        </Link>
      </div>
    </div>
  );
};

export default HeroDetails;
