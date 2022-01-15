import { combineReducers } from "redux";

import sortsReducer from "./sorts";
import userReducer from "./user";
import qrsReducer from "./qrs";

const rootReducer = combineReducers({
  sorts: sortsReducer,
  user: userReducer,
  qrs: qrsReducer,
});

export default rootReducer;
