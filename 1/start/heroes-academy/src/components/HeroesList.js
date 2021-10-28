import React from "react";
import HeroesTable from "./HeroesTable";
function HeroesList() {
  return (
    <div className="card">
      <h5 className="card-header">Lista Herosów</h5>
      <div className="card-body">
        <HeroesTable />
      </div>
    </div>
  );
}
export default HeroesList;
