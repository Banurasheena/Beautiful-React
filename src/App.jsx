import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/MaterialDesign/Header";
import About from "./Components/Layout/Pages/About";
import "./Components/Layout/styles.css";
import Home from "./Components/Layout/Pages/Home";
import Contact from "./Components/Layout/Pages/Contact";
import Blog from "./Components/Layout/Pages/Blog";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <Switch>
            <main class="mdl-layout__content">
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/Blog" component={Blog} />
            </main>
          </Switch>
          <footer class="mdl-mini-footer">
          <div class="mdl-mini-footer__left-section">
            <div class="mdl-logo">farmers market</div>
          </div>
          <div class="mdl-mini-footer__right-section">
            <ul class="mdl-mini-footer__link-list">
              <li><a href="/home">Help</a></li>
              <li><a href="/">Privacy & Terms</a></li>
            </ul>
          </div>
        </footer>

        </div>
      </Router>
    );
  }
}

export default App;
