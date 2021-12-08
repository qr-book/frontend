import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/user";

import { MenuPopup, MobileMenuPopup } from ".";
import { logoSvg, profileSvg } from "../assets/img/header";

function Header() {
  const { email, admin } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };

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
            <MenuPopup loginState={email ? true : false} adminState={admin} onClickLogout={logout}/>
          </div>
        </div>
        <MobileMenuPopup loginState={email ? true : false} adminState={admin} onClickLogout={logout}/>
      </div>
    </div>
  );
}

export default Header;
