import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function MenuPopup({ loginState, adminState, onClickLogout }) {
  return (
    <div>
      {adminState ? (
        <div className="dropdown-content login-admin">
          <Link to="/library">My QRs</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/admin">Admin panel</Link>
          <Link to="/" onClick={onClickLogout}>
            Log out
          </Link>
        </div>
      ) : loginState ? (
        <div className="dropdown-content login-user">
          <Link to="/library">My QRs</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/" onClick={onClickLogout}>
            Log out
          </Link>
        </div>
      ) : (
        <div className="dropdown-content login-none">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sing up</Link>
        </div>
      )}
    </div>
  );
}

MenuPopup.propTypes = {
  loginState: PropTypes.bool.isRequired,
  adminState: PropTypes.bool.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

export default MenuPopup;
