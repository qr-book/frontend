import React from "react";

import api from "../service/api";
import { useSelector } from "react-redux";
import { MobileSortPopup, QRBlock, Sort } from "../components";

const sortItems = [
  { name: "newest first", type: "DESC" },
  { name: "oldest first", type: "ASC" },
];

function MyQRs() {
  const { email, password } = useSelector((state) => state.user);
  const { sortBy } = useSelector((state) => state.sorts);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    api.qr.get(email, password, "DESC").then(({ data }) => setItems(data.data));
  }, [email, password]);

  return (
    <div className="main qrs">
      <div className="container">
        <div className="panel">
          <Sort items={sortItems} />
          <div className="row">
            <a href="/create" className="create-button link">
              Create new
            </a>
            <MobileSortPopup items={sortItems} />
          </div>
        </div>
        <div className="qr-delimiter"></div>
        <div className="qr-list">
          {items.length > 0 ? (
            items.map((obj) => <QRBlock key={obj.id} {...obj} />)
          ) : (
            <h1>You have no QR codes {":("}</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyQRs;
