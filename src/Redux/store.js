import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./CombineReducer";
import { authReducer } from "./slices/AuthSlice";

import {languageReducer} from "./slices/LanguageSlice"
const store=configureStore({
    reducer:{
       appReducer
    }
})
export default store;