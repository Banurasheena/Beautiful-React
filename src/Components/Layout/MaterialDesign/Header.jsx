import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
          <div class="mdl-layout__header-row portfolio-logo-row">
            {/* <span class="mdl-layout__title">
              <div class="portfolio-logo" />
              <span class="mdl-layout__title">Simple website</span>
            </span> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIfQVzZzjGMp_FQeaPNMqpgN5skDJJP7U562iDYnSVd_FhViO8w" alt=""/>
          </div>
          <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
            <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
              <Link class="mdl-navigation__link is-active" to="/home">
                Login
              </Link>
              <Link class="mdl-navigation__link" to="/Blog">
               Farmers
              </Link>
              <Link class="mdl-navigation__link" to="/about">
                Officers
              </Link>
              <Link class="mdl-navigation__link" to="/contact">
              Reports
              </Link>
              <Link class="mdl-navigation__link" to="/contact">
              Seasons
              </Link>

             
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer mdl-layout--small-screen-only">
          <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
            <Link class="mdl-navigation__link is-active" to="/home">
              Portfolio
            </Link>
            <Link class="mdl-navigation__link" to="/Blog">
              Blog
            </Link>
            <Link class="mdl-navigation__link" to="/about">
              About
            </Link>
            <Link class="mdl-navigation__link" to="/contact">
              Contact
            </Link>
          
          </nav>
        </div>
      </Fragment>
    );
  }
}
