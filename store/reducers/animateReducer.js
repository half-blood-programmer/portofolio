import * as t from "../types";

const animateReducer = (
  state = {
    animateKey: "blah",
  },
  action
) => {
  switch (action.type) {
    case t.SET_ANIMATE:
      return {
        animateKey: action.payload,
      };
    default:
      return { ...state };
  }
};

export default animateReducer;
