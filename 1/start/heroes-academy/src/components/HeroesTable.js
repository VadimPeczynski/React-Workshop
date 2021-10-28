import React, { useState } from "react";

const HeroesTable = () => {
  const [textClass, setTextClass] = useState("text-primary");
  function handleClick() {
    debugger;
    setTextClass("text-success");
  }
  const [heroes, setHeroes] = useState([
    {
      id: 1,
      name: "Iron Man",
      team: "Avengers",
      secretIdentity: "Tony Stark",
      salary: 0.99,
      description: "Man with iron suit",
      strength: 4.2,
      logoUrl: "/logos/iron-man.png",
      active: true,
    },
    {
      id: 2,
      name: "Thor",
      team: "Avengers",
      secretIdentity: "Thor Odinson",
      salary: 10.99,
      description: "Norse god of thunder",
      strength: 4.5,
      logoUrl: "/logos/thor.png",
      active: true,
    },
    {
      id: 3,
      name: "Superman",
      team: "Justice League",
      secretIdentity: "Clark Kent",
      salary: 3500,
      description: "Man of steel",
      strength: 5.0,
      logoUrl: "/logos/superman.png",
      active: true,
    },
  ]);

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th></th>
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
                  {/* <img className="image" src={hero.logoUrl} alt={hero.name} /> */}
                </td>
                <td className={textClass} onClick={handleClick}>
                  {hero.name}
                </td>
                <td>{hero.team}</td>
                <td>{hero.secretIdentity}</td>
                <td>{hero.salary} PLN</td>
                <td>{hero.strength}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HeroesTable;
