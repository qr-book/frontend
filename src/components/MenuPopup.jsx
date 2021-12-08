import React from "react";
import { Link } from "react-router-dom";

function MenuPopup({ loginState, adminState, onClickLogout }) {
  return (
    <div>
      {adminState ? (
        <div className="dropdown-content login-admin">
          <Link to="my">My QRs</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/admin">Admin panel</Link>
          <Link to="/" onClick={onClickLogout}>
            Log out
          </Link>
        </div>
      ) : loginState ? (
        <div className="dropdown-content login-user">
          <Link to="/my">My QRs</Link>
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

export default MenuPopup;
