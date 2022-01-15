import React from "react";

import api from "../service/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchQRS } from "../redux/actions/qrs";

import { QRBlockAdmin, QRLoadBlock } from "../components";

function Admin() {
  const [stats, setStats] = React.useState({
    count_of_users: 0,
    count_of_qrs: 0,
  });
  const { items, isLoaded } = useSelector((state) => state.qrs);
  const dispatch = useDispatch();

  const qrs = Object.keys(items).map((key) => {
    return items[key];
  });

  React.useEffect(() => {
    setStats(api.stats.get_().then(({ data }) => setStats(data.data)));
    dispatch(fetchQRS("goga@mail.ru", "gogamail", "DESC"));
  }, [dispatch]);

  return (
    <div className="main admin">
      <div className="container col">
        <div className="stat">
          <div className="stat-block user-count">
            <div className="col">
              <span>{stats.count_of_users}</span>
              <p className="stat-title">Count of users</p>
            </div>
          </div>
          <div className="stat-block user-count">
            <div className="col">
              <span>{stats.count_of_qrs}</span>
              <p className="stat-title">Count of QRs</p>
            </div>
          </div>
        </div>
        <div className="admin-panel row">
          <span className="panel-title">Moderation</span>
          <button className="update-button link">Update</button>
        </div>
        <hr className="admin-hr" />
        <div className="qr-list">
          {isLoaded ? (
            qrs.length > 0 ? (
              qrs.map((obj) => <QRBlockAdmin key={obj.id} data={obj} />)
            ) : (
              <h2>QR Book is empty {":("}</h2>
            )
          ) : (
            Array(2)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="qr">
                  <QRLoadBlock />
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
