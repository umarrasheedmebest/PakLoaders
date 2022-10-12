import { combineReducers } from 'redux';
import counter from './ducks/counter/reducer';

export default combineReducers({
    counter,
});
