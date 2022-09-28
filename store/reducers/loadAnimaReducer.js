import * as t from "../types";

const loadAnimaReducer = (
  state = {
    loadanima: "loading",
  },
  action
) => {
  switch (action.type) {
    case t.SET_LOADANIMATE:
      return {
        loadanima: action.payload,
      };
    default:
      return { ...state };
  }
};

export default loadAnimaReducer;
