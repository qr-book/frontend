import { combineReducers } from "redux";

import qrsReducer from "./qrs";
import sortsReducer from "./sorts";
import statsReducer from "./stats";
import userReducer from "./user";

const rootReducer = combineReducers({
  qrs: qrsReducer,
  sorts: sortsReducer,
  stats: statsReducer,
  user: userReducer,
});

export default rootReducer;
