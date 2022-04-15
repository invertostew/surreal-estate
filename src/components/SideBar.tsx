import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/SideBar.css";

const SideBar: React.FC = (): JSX.Element => {
  return (
    <aside className="sidebar">
      <section className="sidebar__city">
        <ul className="sidebar__list">
          <NavLink
            exact
            to={`/?query={"city": "Manchester"}`}
            className="sidebar__item"
          >
            Manchester
          </NavLink>

          <NavLink
            exact
            to={`/?query={"city": "Liverpool"}`}
            className="sidebar__item"
          >
            Liverpool
          </NavLink>

          <NavLink
            exact
            to={`/?query={"city": "London"}`}
            className="sidebar__item"
          >
            London
          </NavLink>

          <NavLink
            exact
            to={`/?query={"city": "Bristol"}`}
            className="sidebar__item"
          >
            Bristol
          </NavLink>
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
