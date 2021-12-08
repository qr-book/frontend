import React from "react";
import { Link } from "react-router-dom";
import { mobileNavBarSvg } from "../../assets/img/header";

function MobileMenuPopup({ loginState, adminState, onClickLogout }) {
  const [visibleMenuPopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef();
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visibleMenuPopup);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="popup-navbar">
      <div className="popup-btn" onClick={toggleVisiblePopup}>
        <img src={mobileNavBarSvg} alt="" />
      </div>
      {visibleMenuPopup && (
        <div onClick={toggleVisiblePopup}>
          {adminState ? (
            <div className="popup-content">
              <Link to="/">Home</Link>
              <Link to="/create">Create</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/my">My QRs</Link>
              <Link to="/rules">Rules</Link>
              <Link to="/feedback">Feedback</Link>
              <Link to="/admin">Admin</Link>
              <Link to="/" onClick={onClickLogout}>
                Log out
              </Link>
            </div>
          ) : loginState ? (
            <div className="popup-content">
              <Link to="/">Home</Link>
              <Link to="/create">Create</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/my">My QRs</Link>
              <Link to="/rules">Rules</Link>
              <Link to="/feedback">Feedback</Link>
              <Link to="/" onClick={onClickLogout}>
                Log out
              </Link>
            </div>
          ) : (
            <div className="popup-content">
              <Link to="/">Home</Link>
              <Link to="/create">Create</Link>
              <Link to="/rules">Rules</Link>
              <Link to="/feedback">Feedback</Link>
              <Link to="/signup">Sing up</Link>
              <Link to="/login">Log in</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MobileMenuPopup;
