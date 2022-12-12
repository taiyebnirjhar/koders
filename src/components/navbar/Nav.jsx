import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Nav({ title, toRedirect, type = false }) {
  const activeClassName =
    "text-gray-300 custom_border  hover:text-white px-3 py-2 text-sm font-medium";
  const normal =
    "text-gray-300  hover:text-white px-3 py-2 text-sm font-medium";
  return (
    <div>
      <NavLink
        to={toRedirect}
        className={({ isActive }) =>
          isActive && type ? activeClassName : normal
        }
      >
        {title}
      </NavLink>
    </div>
  );
}

export default Nav;
