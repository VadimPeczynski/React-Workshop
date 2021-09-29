import React from "react";
import HeroesTable from "./HeroesTable";

class HeroesList extends React.Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">Lista Herosów</h5>
        <div className="card-body">
          <HeroesTable />
        </div>
      </div>
    );
  }
}

export default HeroesList;
