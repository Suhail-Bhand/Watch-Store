import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Watch </span>Store
            <span className="icon">
              <FaCode />
            </span>
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
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/quick"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Quick
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/best"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Best
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <FaTimes />
              </span>
            ) : (
              <span className="icon">
                <FaBars />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
