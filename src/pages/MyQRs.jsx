import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSortBy } from "../redux/actions/sorts";
import { deleteQR, fetchQRS } from "../redux/actions/qrs";

import { MobileSortPopup, QRBlock, QRLoadBlock, Sort } from "../components";

const sortItems = [
  { name: "newest first", type: "DESC" },
  { name: "oldest first", type: "ASC" },
];

function MyQRs() {
  const { email, password } = useSelector((state) => state.user);
  const { sortBy } = useSelector((state) => state.sorts);
  const { items, isLoaded } = useSelector((state) => state.qrs);

  const qrs = Object.keys(items).map((key) => {
    return items[key];
  });

  const dispatch = useDispatch();
  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const onRemoveItem = async (id) => {
    if (window.confirm("Вы действительно хотите удалить?")) {
      dispatch(deleteQR(email, password, id));
    }
  };

  React.useEffect(() => {
    dispatch(fetchQRS(email, password, sortBy));
  }, [dispatch, sortBy, email, password]);

  return (
    <div className="main qrs">
      <div className="container">
        <div className="panel">
          <Sort
            items={sortItems}
            activeSortType={sortBy}
            onClickSortType={onSelectSortType}
          />
          <div className="row">
            <a href="/create" className="create-button link">
              Create new
            </a>
            <MobileSortPopup
              items={sortItems}
              activeSortType={sortBy}
              onClickSortType={onSelectSortType}
            />
          </div>
        </div>
        <div className="qr-delimiter"></div>
        <div className="qr-list">
          {isLoaded ? (
            qrs.length > 0 ? (
              qrs.map((obj) => (
                <QRBlock key={obj.id} data={obj} onClickDelete={onRemoveItem} />
              ))
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

export default MyQRs;
