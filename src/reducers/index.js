import toDoReducers from "./toDoReducers";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  toDoReducers,
});

export default rootReducers;
