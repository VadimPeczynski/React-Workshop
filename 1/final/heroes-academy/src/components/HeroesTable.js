import React, { useEffect, useState } from "react";
import { getHeroes } from "../api/heroesApi";
import Fist from "./Fist";
import "../styles/table.css";
import HeroLogo from "./HeroLogo";

function HeroesTable() {
  const [heroes, setHeroes] = useState([]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    getHeroes().then((_heroes) => {
      setHeroes(_heroes);
    });
  }, []);

  function onLogoButtonClick() {
    setShowImage(!showImage);
  }

  return heroes && heroes.length ? (
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
        </tr>
      </thead>
      <tbody>
        {heroes.map((hero) => {
          return (
            <tr key={hero.id}>
              <td>
                <HeroLogo hero={hero} showImage={showImage} />
              </td>
              <td>{hero.name}</td>
              <td>{hero.team}</td>
              <td>{hero.secretIdentity}</td>
              <td>{hero.salary} PLN</td>
              <td>
                <Fist strength={hero.strength} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <></>
  );
}
export default HeroesTable;
