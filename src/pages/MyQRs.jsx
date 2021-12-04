import React from "react";
import { useSelector } from "react-redux";

import { Sort, MobileSortPopup, QRBlock } from "../components";

const sortItems = [
  { name: "newest first", type: "newest" },
  { name: "oldest first", type: "oldest" },
];

function MyQRs() {
  const { items, sortBy } = useSelector(({ qrs, sorts }) => {
    return {
      items: qrs.items,
      sortBy: sorts.sortBy,
    };
  });

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
          {items && items.map((obj) => <QRBlock key={obj.id} {...obj} />)}
          {items.length < 1 && <h1>You have no QR codes {":("}</h1>}
        </div>
      </div>
    </div>
  );
}

export default MyQRs;
