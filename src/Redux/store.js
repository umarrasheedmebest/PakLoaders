import createSagaMiddleware from "@redux-saga/core";

import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import postSaga from "./PostSaga";
 
import { authReducer } from "./slices/AuthSlice";

import {languageReducer} from "./slices/LanguageSlice"
import { postReducer } from "./slices/PostSlice";
const saga=createSagaMiddleware();
const store=configureStore({
    reducer:{
       auth:authReducer,
       language:languageReducer,
       post:postReducer
    },
// middleware:[saga]
})
// saga.run(postSaga);
export default store;