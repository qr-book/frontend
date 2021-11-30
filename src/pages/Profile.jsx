import React from "react";
import { Link } from "react-router-dom";

import defaultAvatarPng from "../assets/img/default_avatar.png";

function Profile() {
  return (
    <div className="main profile">
      <div className="container">
        <div className="profile-content">
          <div className="profile-info">
            <hr className="mobile-hr" />
            <h1>Bublik</h1>
            <hr className="desktop-hr" />
            <span>example@qr.com</span>
          </div>
          <div className="profile-img">
            <img src={defaultAvatarPng} alt="" />
            <div className="profile-buttons col">
              <Link to="/feed" className="button link">
                Edit
              </Link>
              <Link to="/my" className="button link">
                My QRs
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-recent">
          <h1>Recent QRs</h1>
          <hr className="mobile-hr" />
          <hr className="desktop-hr" />
          <div className="qr-list list-recent">
            <div className="qr qr-recent">
              <div className="qr-img">
                <img src="img/qr-code.png" alt="" />
              </div>
              <div className="qr-info">
                <div className="qr-name">
                  <div className="col">
                    <span>Klenin Sosi Pisun Bo</span>
                    <hr />
                    <span>21.11.21</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="qr qr-recent">
              <div className="qr-img">
                <img src="img/qr-code.png" alt="" />
              </div>
              <div className="qr-info">
                <div className="qr-name">
                  <div className="col">
                    <span>Klenin Sosi Pisun Bo</span>
                    <hr />
                    <span>21.11.21</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
