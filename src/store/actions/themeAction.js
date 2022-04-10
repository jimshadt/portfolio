import { TOGGLE_THEME } from "../types";

export const toggleTheme = data => {
  return async dispatch => {
    dispatch({ type: TOGGLE_THEME, payload: data });
  };
};
