import React from "react";
import { useSelector } from "react-redux";

import { QRBlockAdmin } from "../components";

function Admin() {
  const { items, count_qrs, count_users } = useSelector(({ qrs, stats }) => {
    return {
      items: qrs.items,
      count_qrs: stats.count_qrs,
      count_users: stats.count_users,
    };
  });

  return (
    <div className="main admin">
      <div className="container col">
        <div className="stat">
          <div className="stat-block user-count">
            <div className="col">
              <span>{count_users}</span>
              <p className="stat-title">Count of users</p>
            </div>
          </div>
          <div className="stat-block user-count">
            <div className="col">
              <span>{count_qrs}</span>
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
          {items.map((obj) => (
            <QRBlockAdmin key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
