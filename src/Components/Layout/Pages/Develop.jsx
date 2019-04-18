import React, { Component } from "react";
import Navbar from "../Layout/Bootstrap/Navbar";
import Slider from "../Layout/Bootstrap/Slider";
import '../Develop.css'
export default class Develop extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
      </div>
    );
  }
}
