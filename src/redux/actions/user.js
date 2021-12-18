import api from "../../service/api";

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

export const regUser = (email, password) => async (dispatch) => {
  try {
    await api.user.registation(email, password);
    dispatch(authUser(email, password));
  } catch (e) {
    if (e.response.status === 400) {
      return e.response.data.data;
    }
  }
};

export const authUser = (email, password) => async (dispatch) => {
  try {
    const {
      data: {
        data: { name, role },
      },
    } = await api.user.login(email, password);
    dispatch(setEmail(email));
    dispatch(setPassword(password));
    dispatch(setName(name));
    dispatch(setAdmin(role.name === "admin" ? true : false));
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data.data;
    }
  }
};

export const editUser =
  (email, name, lastEmail, password) => async (dispatch) => {
    try {
      await api.user.edit(email, name, lastEmail, password);
      dispatch(setName(name));
      dispatch(setEmail(email));
      window.location.replace("/profile");
    } catch (e) {
      if (e.response.status === 401) {
        dispatch(logoutUser());
      }
    }
  };

export const logoutUser = () => (dispatch) => {
  dispatch(setEmail(null));
  dispatch(setPassword(null));
  dispatch(setName(null));
  dispatch(setAdmin(false));
};
