import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar: React.FC = (): JSX.Element => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links__item">
          <NavLink
            exact
            to="/"
            className="navbar-link"
            activeClassName="selected"
          >
            View Properties
          </NavLink>
        </li>

        <li className="navbar-links__item">
          <NavLink
            exact
            to="/add-property"
            className="navbar-link"
            activeClassName="selected"
          >
            Add a Property
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
