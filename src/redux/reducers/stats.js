const initialState = {
  count_qrs: 0,
  count_users: 0,
};

const stats = (state = initialState, action) => {
  if (action.type === "SET_STATS") {
    return {
      ...state,
      qrs: action.payload,
      users: action.payload,
    };
  }
  return state;
};

export default stats;
