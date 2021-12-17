import React from "react";

import api from "../service/api";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/user";
import { setSortBy } from "../redux/actions/sorts";
import { setQRs, removeQR } from "../redux/actions/qrs";

import { MobileSortPopup, QRBlock, QRLoadBlock, Sort } from "../components";

const sortItems = [
  { name: "newest first", type: "DESC" },
  { name: "oldest first", type: "ASC" },
];

function MyQRs() {
  const { email, password } = useSelector((state) => state.user);
  const { sortBy } = useSelector((state) => state.sorts);
  const { items } = useSelector((state) => state.qrs);
  const [isLoaded, setIsLoaded] = React.useState(0);
  const dispatch = useDispatch();

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const onRemoveItem = async (id) => {
    if (window.confirm("Вы действительно хотите удалить?")) {
      await api.qr.delete(id, email, password);
      dispatch(removeQR(id));
    }
  };

  React.useEffect(() => {
    api.qr
      .get(email, password, sortBy)
      .then(({ data }) => {
        dispatch(setQRs(data.data));
        dispatch(setSortBy("DESC"));
        setIsLoaded(1);
      })
      .catch((e) => {
        if (e.response.status === 401) {
          dispatch(logoutUser());
        }
      });
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
            items.length > 0 ? (
              items.map((obj) => (
                <QRBlock key={obj.id} data={obj} onClickDelete={onRemoveItem} />
              ))
            ) : (
              <h1>You have no QR codes {":("}</h1>
            )
          ) : (
            Array(2)
              .fill(0)
              .map((_, index) => <QRLoadBlock key={index} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default MyQRs;
