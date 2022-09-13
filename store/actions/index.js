import * as t from "../types";

export const setAnimate = (animateKey) => ({
  type: t.SET_ANIMATE,
  payload: animateKey,
});
