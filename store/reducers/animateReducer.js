import * as t from "../types";

const animateReducer = (
  state = {
    animatekey: "blah",
  },
  action
) => {
  switch (action.type) {
    case t.SET_ANIMATE:
      return {
        animatekey: action.payload,
      };
    default:
      return { ...state };
  }
};

export default animateReducer;
