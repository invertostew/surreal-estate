import React from "react";
import { useLocation, NavLink } from "react-router-dom";

import qs from "qs";

import "../styles/SideBar.css";

interface QueryCity {
  city: string;
}

interface SortPrice {
  price: number;
}

type ValueObj = QueryCity | SortPrice;

const SideBar: React.FC = (): JSX.Element => {
  const buildQueryString = (operation: string, valueObj: ValueObj): string => {
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <aside className="sidebar">
      <section className="sidebar__city">
        <h3 className="sidebar__header">Filter by City</h3>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <NavLink
              exact
              to={buildQueryString("query", { city: "Manchester" })}
              className="sidebar-link"
              activeClassName="selected"
            >
              Manchester
            </NavLink>
          </li>

          <li className="sidebar__list-item">
            <NavLink
              exact
              to={buildQueryString("query", { city: "Liverpool" })}
              className="sidebar-link"
              activeClassName="selected"
            >
              Liverpool
            </NavLink>
          </li>

          <li className="sidebar__list-item">
            <NavLink
              exact
              to={buildQueryString("query", { city: "London" })}
              className="sidebar-link"
              activeClassName="selected"
            >
              London
            </NavLink>
          </li>

          <li className="sidebar__list-item">
            <NavLink
              exact
              to={buildQueryString("query", { city: "Bristol" })}
              className="sidebar-link"
              activeClassName="selected"
            >
              Bristol
            </NavLink>
          </li>
        </ul>

        <h3 className="sidebar__header">Sort by</h3>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <NavLink
              exact
              to={buildQueryString("sort", { price: 1 })}
              className="sidebar-link"
              activeClassName="selected"
            >
              Price Ascending
            </NavLink>
          </li>

          <li className="sidebar__list-item">
            <NavLink
              exact
              to={buildQueryString("sort", { price: -1 })}
              className="sidebar-link"
              activeClassName="selected"
            >
              Price Descending
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
