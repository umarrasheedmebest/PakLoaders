import createSagaMiddleware from "@redux-saga/core";

import { applyMiddleware, configureStore,combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";


import { watcherSaga } from "./rootSaga";

 
import { authReducer } from "./slices/AuthSlice";
import { bidsReducer } from "./slices/BidsSlice";

import {languageReducer} from "./slices/LanguageSlice"
import { postReducer } from "./slices/PostSlice";
import { userReducer } from "./slices/UserSlice";

const sagaMiddleware=createSagaMiddleware();
const reducer=combineReducers({
    auth:authReducer,
    language:languageReducer,
    post:postReducer,
    user:userReducer,
    bids:bidsReducer
})
const store=configureStore({
    reducer,
middleware:[...getDefaultMiddleware({thunk:false}),sagaMiddleware]
})
sagaMiddleware.run(watcherSaga);
export default store;