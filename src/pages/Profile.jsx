import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import defaultAvatarPng from "../assets/img/default_avatar.png";
import { QRBlockMinimize } from "../components";

function Profile() {
  const items = useSelector(({ qrs }) => qrs.items.slice(0, 2));
  const {email, name} = useSelector((state) => state.user);

  return (
    <div className="main profile">
      <div className="container">
        <div className="profile-content">
          <div className="profile-info">
            <hr className="mobile-hr" />
            <h1>{name}</h1>
            <hr className="desktop-hr" />
            <span>{email}</span>
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
            {items.map((obj) => (
              <QRBlockMinimize key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
