import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Heroes Academy
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact activeClassName="active">
              Witaj
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="heroes" activeClassName="active">
              Lista Herosów
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
