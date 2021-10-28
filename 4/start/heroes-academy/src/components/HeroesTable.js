import React, { useEffect, useState } from "react";
import { getHeroes, deleteHero } from "../api/heroesApi";
import Fist from "./Fist";
import "../styles/table.css";
import { Link } from "react-router-dom";

function HeroesTable() {
  const [heroes, setHeroes] = useState([]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    getHeroesList();
  }, []);

  function onLogoButtonClick() {
    setShowImage(!showImage);
  }

  function deleteHeroById(id) {
    deleteHero(id).then(() => {
      getHeroesList();
    });
  }

  function getHeroesList() {
    getHeroes().then((_heroes) => {
      setHeroes(_heroes);
    });
  }

  if (!(heroes && heroes.length)) {
    return null;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <button
              className={showImage ? "btn btn-danger" : "btn btn-success"}
              type="button"
              onClick={onLogoButtonClick}
            >
              {showImage ? "Ukryj" : "Pokaż"} logo
            </button>
          </th>
          <th>Nazwa</th>
          <th>Team</th>
          <th>Tożsamość</th>
          <th>Wynagrodzenie</th>
          <th>Siła</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {heroes.map((hero) => {
          return (
            <tr key={hero.id}>
              <td>
                {showImage && (
                  <img className="image" src={hero.logoUrl} alt={hero.name} />
                )}
              </td>
              <td>
                <Link to={"/hero-details/" + hero.id}>{hero.name}</Link>
              </td>
              <td>{hero.team}</td>
              <td>{hero.secretIdentity}</td>
              <td>{hero.salary} PLN</td>
              <td>
                <Fist strength={hero.strength} />
              </td>
              <td>
                <span
                  className="fas fa-times action"
                  onClick={() => deleteHeroById(hero.id)}
                ></span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default HeroesTable;
