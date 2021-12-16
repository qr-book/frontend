export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const removeQR = (id) => ({
  type: "REMOVE_QR",
  payload: id,
});

export const setQRs = (items) => ({
  type: "SET_QRS",
  payload: items,
});
