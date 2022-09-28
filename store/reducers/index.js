import { combineReducers } from "redux";
import animateReducer from "./animateReducer";
import loadAnimaReducer from "./loadAnimaReducer";

const rootReducer = combineReducers({
  main: animateReducer,
  load: loadAnimaReducer,
});

export default rootReducer;
