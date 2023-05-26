import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-sm  navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClassaName="active"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              about
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              contact
            </Link>
          </li>
        </ul>
        <div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="sub
mit"
            >
              Search
            </button>
          </form>
        </div>

        <div className="d-flex">
          <div
            className="bg-primary rounded mx-2"
            onClick={() => {
              props.toggleMode("primary");
            }}
            style={{ height: "30px", width: "30px" }}
          ></div>
          <div
            className="bg-success rounded mx-2"
            onClick={() => {
              props.toggleMode("success");
            }}
            style={{ height: "30px", width: "30px" }}
          ></div>
          <div
            className="bg-warning rounded mx-2"
            onClick={() => {
              props.toggleMode("warning");
            }}
            style={{ height: "30px", width: "30px" }}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            onClick={() => {
              props.toggleMode("danger");
            }}
            style={{ height: "30px", width: "30px" }}
          ></div>
        </div>
        {/* <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.toggleMode}
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable dark mode
          </label>
        </div> */}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
  // , title: PropTypes.string.isRequired

};

Navbar.defaultProps = {
  title: "Set title here"
};
