import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-700 text-white shadow-lg">
      <h2 className="text-3xl">
        <NavLink
          to="/"
          className="hover:text-yellow-400 transition duration-300"
        >
          Shopping Cart 🛒
        </NavLink>
      </h2>
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium text-2xl ${
                isActive
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              } transition duration-300`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `font-medium text-2xl ${
                isActive
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              } transition duration-300`
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
