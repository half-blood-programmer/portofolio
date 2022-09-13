import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";

const middleware = [thunk];

const makeStore = () =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore);
