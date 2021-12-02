import React from "react";

import { Sort, MobileSortPopup, QRBlock } from "../components";

function MyQRs({ items }) {
  return (
    <div className="main qrs">
      <div className="container">
        <div className="panel">
          <Sort items={["newest first", "oldest first"]} />
          <div className="row">
            <a href="/create" className="create-button link">
              Create new
            </a>
            <MobileSortPopup items={["newest first", "oldest first"]} />
          </div>
        </div>
        <div className="qr-delimiter"></div>
        <div className="qr-list">
          {items.map((obj) => (
            <QRBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyQRs;
