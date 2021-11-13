import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faTimes,
  faBars,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const Navs = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <span className="logos"></span>
          Cartify.io
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/cart"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Cart
              <FontAwesomeIcon icon={faCartArrowDown} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/categories"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/login"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Login
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <p>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navs;
