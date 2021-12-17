import React from "react";
import { Link } from "react-router-dom";

import api from "../service/api";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/user";
import { setQRs } from "../redux/actions/qrs";

import defaultAvatarPng from "../assets/img/default_avatar.png";
import { QRBlockMinimize, QRLoadBlock } from "../components";

function Profile() {
  const { email, password, name } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.qrs);
  const [isLoaded, setIsLoaded] = React.useState(0);

  const dispatch = useDispatch();
  React.useEffect(() => {
    api.qr
      .get(email, password, "DESC")
      .then(({ data }) => {
        dispatch(setQRs(data.data));
        setIsLoaded(1);
      })
      .catch((e) => {
        if (e.response.status === 401) {
          dispatch(logoutUser());
        }
      });
  }, [dispatch, email, password]);

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
            {isLoaded ? (
              items.length > 0 ? (
                items
                  .slice(0, 2)
                  .map((obj) => <QRBlockMinimize key={obj.id} {...obj} />)
              ) : (
                <h3>You have no QR codes</h3>
              )
            ) : (
              Array(2)
                .fill(0)
                .map((_, index) => <QRLoadBlock key={index} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
