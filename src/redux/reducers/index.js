import { combineReducers } from "redux";

import qrsReducer from "./qrs";
import sortsReducer from "./sorts";
import statsReducer from "./stats";

const rootReducer = combineReducers({
  qrs: qrsReducer,
  sorts: sortsReducer,
  stats: statsReducer,
});

export default rootReducer;
