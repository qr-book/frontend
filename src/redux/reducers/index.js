import { combineReducers } from "redux";

import sortsReducer from "./sorts";
import statsReducer from "./stats";
import userReducer from "./user";
import qrsReducer from "./qrs";

const rootReducer = combineReducers({
  sorts: sortsReducer,
  stats: statsReducer,
  user: userReducer,
  qrs: qrsReducer,
});

export default rootReducer;
