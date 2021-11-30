import React from "react";

import { ada, banana, jaba } from "../assets/img/footer";

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
