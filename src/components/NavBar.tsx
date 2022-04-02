import React from "react";

import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links__item">
          <a href="#!">View Properties</a>
        </li>
        <li className="navbar-links__item">
          <a href="#!">Add a Property</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
