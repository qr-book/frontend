import React from "react";
import { Link } from "react-router-dom";

import { MenuPopup, MobileMenuPopup } from ".";
import { logoSvg, profileSvg, mobileNavBarSvg } from "../assets/img/header";

function Header() {
  let login = 1;
  let admin = 0;

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logoSvg} alt="QR Book logo" />
          </Link>
          <Link to="/">
            <span>home</span>
          </Link>
        </div>
        <div className="nav-bar">
          <Link to="/create">
            <span>create</span>
          </Link>
          <Link to="/rules">
            <span>rules</span>
          </Link>
          <Link to="/feedback">
            <span>feedback</span>
          </Link>
          <div className="dropdown">
            <div className="dropbtn">
              <Link to="/profile">
                <img src={profileSvg} alt="" />
              </Link>
            </div>
            <MenuPopup loginState={login} adminState={admin} />
          </div>
        </div>
        <div className="popup-navbar">
          <div className="popup-btn">
            <img src={mobileNavBarSvg} alt="" />
          </div>
          <MobileMenuPopup loginState={login} adminState={admin} />
        </div>
      </div>
    </div>
  );
}

export default Header;
