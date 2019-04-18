import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle'
class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light bg-secondary fixed-top">
          <Link to="/" className="navbar-brand">
            ReactApp
          </Link>
          <Link to="/about" clasName="nav-link">
            About
          </Link>
        </nav>
      </Fragment>
    );
  }
}
export default Navbar;
