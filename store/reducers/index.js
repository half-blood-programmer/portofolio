import { combineReducers } from "redux";
import animateReducer from "./animateReducer";

const rootReducer = combineReducers({
  main: animateReducer,
});

export default rootReducer;
