import React from "react";

import arrow from "../assets/img/arrow.png";
import home from "../assets/img/home.png";

function Home() {
  return (
    <div className="main">
      <div className="container">
        <div id="main-qr">
          <img src={home} alt="" />
        </div>
        <div className="content">
          <h1>QR Book</h1>
          <div id="mobile-qr">
            <img src={home} alt="" />
          </div>
          <p>QR codes are an easy way to share information with the world.</p>
          <p>
            The aim of project is to make the creating of QR codes simple and
            clear for you. You can create uniquely designed Qr’s and track
            statistics.
          </p>
          <div className="create">
            <img src={arrow} width="192" height="192" alt="" />
            <a href="/create" className="link button">
              Create
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
