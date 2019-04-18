import React, { Component } from "react";

import images from "../images/images.jpeg";
import images1 from "../images/images1.jpg";
import images2 from "../images/images2.jpeg";
// import images3 from "../images/images3.jpeg";

class IndexMain extends Component {
  render() {
    return (
      <div class="mdl-grid portfolio-max-width">
        <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
          <div class="mdl-card__media">
            <img class="article-image" src={images} border="0" alt="" />
          </div>
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Richard Kings</h2>
          </div>
          <div class="mdl-card__supporting-text">
            West End Officer
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a
              class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
              href="portfolio-example01.html"
            >
              Read more
            </a>
          </div>
        </div>
        <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
          <div class="mdl-card__media">
            <img class="article-image" src={images1} border="0" alt="" />
          </div>
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Sunt nulla</h2>
          </div>
          <div class="mdl-card__supporting-text">
            East End Officer
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a
              class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
              href="portfolio-example01.html"
            >
              Read more
            </a>
          </div>
        </div>
        <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
          <div class="mdl-card__media">
            <img class="article-image" src={images2} border="0" alt="" />
          </div>
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Oketch Mazini</h2>
          </div>
          <div class="mdl-card__supporting-text">
            North End Officer
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a
              class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
              href="portfolio-example01.html"
            >
              Read more
            </a>
          </div>
        </div>
        </div>
    );
  }
}
export default IndexMain;