import React from "react";
import { Link } from "react-router-dom";

function MobileMenuPopup({ loginState, adminState }) {
  return (
    <div>
      {adminState ? (
        <div className="popup-content">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/my">My QRs</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/admin">Admin</Link>
        </div>
      ) : loginState ? (
        <div className="popup-content">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/my">My QRs</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/feedback">Feedback</Link>
        </div>
      ) : (
        <div className="popup-content">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/signup">Sing up</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

export default MobileMenuPopup;
