const initialState = {
  items: {},
  isLoaded: false,
};

const qrs = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QRS": {
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    }

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    case "REMOVE_QR": {
      const newItems = {
        ...state.items,
      };

      for (const [key, obj] of Object.entries(newItems)) {
        if (obj.id === action.payload) delete newItems[key];
      }

      return {
        ...state,
        items: newItems,
      };
    }

    default:
      return state;
  }
};

export default qrs;
