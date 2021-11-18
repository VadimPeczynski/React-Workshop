import React from "react";
import HeroesTable from "./HeroesTable";
import { Link } from "react-router-dom";

class HeroesList extends React.Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">Lista Herosów</h5>
        <div className="card-body">
          <div className="table-responsive"></div>
          <HeroesTable />
        </div>
        <div className="card-footer">
          <Link className="btn btn-outline-secondary" to="/hero-edit">
            Dodaj herosa
          </Link>
        </div>
      </div>
    );
  }
}

export default HeroesList;
