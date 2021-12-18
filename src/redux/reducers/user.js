const initialState = {
  email: null,
  password: null,
  name: null,
  avatar: null,
  admin: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "SET_AVATAR":
      return {
        ...state,
        avatar: action.payload,
      };

    case "SET_ADMIN":
      return {
        ...state,
        admin: action.payload,
      };

    default:
      return state;
  }
};

export default user;
