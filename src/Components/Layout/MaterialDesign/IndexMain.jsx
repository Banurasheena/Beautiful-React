

import React, { Component, Fragment } from "react";

class AboutMain extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrapper fadeInDown">
        <div id="formContent">
   

 
        {/* <div className="fadeIn first">
          <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
        </div> */}

 
        <form>
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
          <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>

    
        <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div>

        </div>
      </div>
      </Fragment>
    );
  }
}
export default AboutMain;
