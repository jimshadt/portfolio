import { TOGGLE_THEME } from "../types";

const themeReducer = (state = true, { type, payload }) => {
    switch (type) {
      case TOGGLE_THEME:
        return payload;
      default:
        return state;
    }
  };
  
  export default themeReducer;
  