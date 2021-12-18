import api from "../../service/api";

export const setEmail = (email) => ({
  type: "SET_EMAIL",
  payload: email,
});

export const setPassword = (password) => ({
  type: "SET_PASSWORD",
  payload: password,
});

export const setName = (name) => ({
  type: "SET_NAME",
  payload: name,
});

export const setAvatar = (image_hash) => ({
  type: "SET_AVATAR",
  payload: image_hash,
});

export const setAdmin = (admin) => ({
  type: "SET_ADMIN",
  payload: admin,
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
        data: { name, role, image_hash },
      },
    } = await api.user.login(email, password);
    dispatch(setEmail(email));
    dispatch(setPassword(password));
    dispatch(setName(name));
    dispatch(setAvatar(image_hash));
    dispatch(setAdmin(role.name === "admin" ? true : false));
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data.data;
    }
  }
};

export const editUser =
  (email, name, image, lastEmail, password) => async (dispatch) => {
    try {
      const data = await api.user.edit(
        email,
        name,
        image[0],
        lastEmail,
        password
      );
      dispatch(setEmail(email));
      dispatch(setName(name));
      if (data) {
        const {
          data: {
            data: { image_hash },
          },
        } = data;
        dispatch(setAvatar(image_hash));
      }
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
