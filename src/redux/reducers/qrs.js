const initialState = {
  items: [],
  isLoaded: false,
};

const qrs = (state = initialState, action) => {
  if (action.type === "SET_QRS") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default qrs;
