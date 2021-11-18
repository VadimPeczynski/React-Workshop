import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t, i18n } = useTranslation();
  const lngs = ["en", "pl"];

  function handleLanguageChange({ target }) {
    i18n.changeLanguage(target.value);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Heroes Academy
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact activeClassName="active">
              {t("welcome")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/heroes" activeClassName="active">
              {t("heroes_list")}
            </NavLink>
          </li>
          <li className="nav-item">
            <select
              className="form-select"
              id="language"
              name="language"
              value={i18n.language}
              onChange={handleLanguageChange}
            >
              {lngs.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
