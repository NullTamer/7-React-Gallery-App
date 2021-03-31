import React from "react";
import { NavLink } from "react-router-dom";

// Nav feature for nav buttons with links
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/search/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/search/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/search/birds">Birds</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
