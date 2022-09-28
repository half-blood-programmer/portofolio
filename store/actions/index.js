import * as t from "../types";

export const setanimate = (animatekey) => ({
  type: t.SET_ANIMATE,
  payload: animatekey,
});

export const setloadanimate = (loadanima) => ({
  type: t.SET_LOADANIMATE,
  payload: loadanima,
});
