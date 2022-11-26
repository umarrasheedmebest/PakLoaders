// Imports: Dependencies
import { combineReducers } from 'redux';
import authReducer from '../modules/Auth/dux/authReducer';

const reducerMap = {
 auth: authReducer,
};

// Redux: Root Reducer
const rootReducer = combineReducers(reducerMap);

// Exports
export default rootReducer;
export { reducerMap };
