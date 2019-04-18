

import React, { Component, Fragment } from "react";
// import contactImage from '../images/contact-image.jpg'

class ContactMain extends Component {
  render() {
    return (
      <Fragment>
        <div class="mdl-grid portfolio-max-width portfolio-contact">
          <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Register Farmer</h2>
            </div>
            <div class="mdl-card__media">
              <img
                class="article-image"
                // src={contactImage}
                border="0"
                alt=""
              />
            </div>
            <div class="mdl-card__supporting-text">
              <p>
                All farmers are registered here
              </p>
              <p>
                Excepteur reprehenderit sint exercitation ipsum consequat qui
                sit id velit elit. Velit anim eiusmod labore sit amet.
              </p>
              <form action="#" class="">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input
                    class="mdl-textfield__input"
                    pattern="[A-Z,a-z, ]*"
                    type="text"
                    id="Name"
                  />
                  <label class="mdl-textfield__label" for="Name">
                    Name...
                  </label>
                  <span class="mdl-textfield__error">
                    Letters and spaces only
                  </span>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="text" id="Email" />
                  <label class="mdl-textfield__label" for="Email">
                   Gender
                  </label>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="text" id="Email" />
                  <label class="mdl-textfield__label" for="Email">
                  Age
                  </label>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="text" id="Email" />
                  <label class="mdl-textfield__label" for="Email">
                  Status
                  </label>
                </div>

                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <textarea
                    class="mdl-textfield__input"
                    type="text"
                    rows="5"
                    id="note"
                  />
                  <label class="mdl-textfield__label" for="note">
                    comment
                  </label>
                </div>
                <p>
                  <button
                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                    type="submit"
                  >
                    Submit
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactMain;