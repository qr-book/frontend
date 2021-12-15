import { combineReducers } from "redux";

import sortsReducer from "./sorts";
import statsReducer from "./stats";
import userReducer from "./user";

const rootReducer = combineReducers({
  sorts: sortsReducer,
  stats: statsReducer,
  user: userReducer,
});

export default rootReducer;
