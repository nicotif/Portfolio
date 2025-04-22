import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4">
    <ul className="flex space-x-4">
      {["/", "about", "projects", "contact"].map((path) => (
        <li key={path}>
          <NavLink
            to={path === "/" ? "/" : `/${path}`}
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            {path === "/"
              ? "Home"
              : path.charAt(0).toUpperCase() + path.slice(1)}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
