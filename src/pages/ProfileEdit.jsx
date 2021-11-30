import React from "react";

import defaultAvatarPng from "../assets/img/default_avatar.png";

function ProfileEdit() {
  return (
    <div className="main">
      <div className="container">
        <form className="profile-form">
          <div className="form-avatar">
            <img src={defaultAvatarPng} alt="" />
            <label htmlFor="avatar">
              <div className="button link">New</div>
              <input
                id="avatar"
                type="file"
                name="avatar"
                accept="image/jpeg,image/png"
              />
            </label>
          </div>
          <div className="form-info">
            <input
              type="text"
              name="nickname"
              placeholder="nickname"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="example@qr.com"
              required
            />
          </div>
          <button className="link submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
