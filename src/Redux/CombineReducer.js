import { combineReducers } from "redux";
import { authReducer } from "./slices/AuthSlice";
import { languageReducer } from "./slices/LanguageSlice";

const appReducer=combineReducers({
    language:languageReducer,
    authReducer
});
export default appReducer;