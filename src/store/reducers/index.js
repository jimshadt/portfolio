import { combineReducers } from "redux";
import { LOGOUT } from "../types";
import loadingReducer from "./loadingReducer";
import themeReducer from "./themeReducer";

const appReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;