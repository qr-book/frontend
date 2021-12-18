import api from "../../service/api";
import { logoutUser } from "./user";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const removeQR = (id) => ({
  type: "REMOVE_QR",
  payload: id,
});

export const setQRS = (items) => ({
  type: "SET_QRS",
  payload: items,
});

export const fetchQRS = (email, password, sortBy) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  api.qr
    .get(email, password, sortBy)
    .then(({ data }) => {
      dispatch(setQRS({ ...data.data }));
    })
    .catch((e) => {
      if (e.response.status === 401) {
        dispatch(logoutUser());
      }
    });
};

export const deleteQR = (email, password, id) => (dispatch) => {
  api.qr
    .delete(id, email, password)
    .then(() => {
      dispatch({
        type: "REMOVE_QR",
        payload: id,
      });
    })
    .catch((e) => {
      if (e.response.status === 401) {
        dispatch(logoutUser());
      }
    });
};
