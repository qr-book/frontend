export const setEmail = (email) => ({
  type: "SET_EMAIL",
  payload: email,
});

export const setPassword = (password) => ({
  type: "SET_PASSWORD",
  payload: password,
});

export const setAdmin = (admin) => ({
  type: "SET_ADMIN",
  payload: admin,
});

export const setName = (name) => ({
  type: "SET_NAME",
  payload: name,
});

export const authUser = (email, password, name, role) => (dispatch) => {
  dispatch(setEmail(email));
  dispatch(setPassword(password));
  dispatch(setName(name));
  dispatch(setAdmin(role.name === "admin" ? true : false));
};

export const logoutUser = () => (dispatch) => {
  dispatch(setEmail(null));
  dispatch(setPassword(null));
  dispatch(setName(null));
  dispatch(setAdmin(false));
};
