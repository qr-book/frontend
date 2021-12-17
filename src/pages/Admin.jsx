import React from "react";
import { useSelector } from "react-redux";

import { QRBlockAdmin, QRLoadBlock } from "../components";

function Admin() {
  const { items, count_qrs, count_users } = useSelector(({ qrs, stats }) => {
    return {
      items: qrs.items,
      count_qrs: stats.count_qrs,
      count_users: stats.count_users,
    };
  });
  const [isLoaded, setIsLoaded] = React.useState(0);
  React.useEffect(() => {
    setIsLoaded(1);
  }, []);

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
          {isLoaded ? (
            items.length > 0 ? (
              items.map((obj) => <QRBlockAdmin key={obj.id} data={obj} />)
            ) : (
              <h1>You have no QR codes {":("}</h1>
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
