import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Heroes Academy
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Witaj
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Lista Herosów
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
