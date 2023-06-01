// Imports: Dependencies
import {createStore, applyMiddleware, compose} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from './rootReducer';
// Imports: Redux Root Saga
import {rootSaga} from './rootSaga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

//ENABLE FOR DEBUG TOOL
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  let logMiddleware = createLogger();
  middleware = [...middleware, logMiddleware];
}

let store = createStore(rootReducer, applyMiddleware(...middleware));

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {store};
