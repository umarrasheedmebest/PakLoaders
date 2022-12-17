// Imports: Dependencies
import { combineReducers } from 'redux';
import authReducer from '../modules/Auth/dux/authReducer';
import { languageReducer } from '../modules/Auth/dux/LanguageReducer';
const reducerMap = {
 auth: authReducer,
 changeLanguage:languageReducer
};

// Redux: Root Reducer
const rootReducer = combineReducers(reducerMap);

// Exports
export default rootReducer;
export { reducerMap };

