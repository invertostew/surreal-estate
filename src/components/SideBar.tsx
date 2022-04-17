import React, { useState } from "react";
import { useLocation, useHistory, NavLink } from "react-router-dom";

import qs from "qs";

import "../styles/SideBar.css";

interface QueryCity {
  city?: string;
  title?: {
    $regex: string;
  };
}

interface SortPrice {
  price: number;
}

type ValueObj = QueryCity | SortPrice;

const SideBar: React.FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useLocation();
  const history = useHistory();

  const buildQueryString = (operation: string, valueObj: ValueObj): string => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    // come back and check this string cast
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse((currentQueryParams[operation] as string) || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event: React.FormEvent): void => {
    event.preventDefault();

    const newQueryString = buildQueryString("query", {
      title: { $regex: searchTerm },
    });

    history.push(newQueryString);
  };

  return (
    <aside className="sidebar">
      <section className="sidebar__search">
        <h3 className="sidebar__header">Search</h3>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>

      <section className="sidebar__query">
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
      </section>

      <section className="sidebar__sort">
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
