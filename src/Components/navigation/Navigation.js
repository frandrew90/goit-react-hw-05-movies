import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Home
      </NavLink>

      <NavLink
        exact
        to="/movies"
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
