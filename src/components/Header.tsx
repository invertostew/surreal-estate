import React from "react";

import NavBar from "./NavBar";

import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="https://via.placeholder.com/160x80" alt="Surreal Estate" className="header-logo__logo" />
      </div>

      <NavBar />
    </header>
  );
}

export default Header;
