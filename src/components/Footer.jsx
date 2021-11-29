import React from "react";

import ada from "../assets/img/devs/ada.png";
import banana from "../assets/img/devs/banana.png";
import jaba from "../assets/img/devs/jaba.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <span className="created-by">created by</span>
        <div className="developers">
          <div className="dev">
            <img src={jaba} alt="" />
          </div>
          <div className="dev">
            <img src={banana} alt="" />
          </div>
          <div className="dev">
            <img src={ada} alt="" />
          </div>
        </div>
        <span className="year"> 2021</span>
      </div>
    </div>
  );
}

export default Footer;
