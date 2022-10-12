import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers'

// Imports: Redux Root Saga
// import rootSaga from './saga'
// Imports: Redux

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['counter'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware: Redux Saga
// const sagaMiddleware = createSagaMiddleware();
const logMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production'
});
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    // createLogger(),
    logMiddleware
  ),
);

// Middleware: Redux Saga
// sagaMiddleware.run(rootSaga);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};
