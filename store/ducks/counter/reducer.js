import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from './constants';

const initialState = {
    count: 0
}

const addCounter = (state, action) => update(state, {
    count: { $set: state.count + action.payload.count }
});

const removeCounter = (state, action) => update(state, {
    count: { $set: state.count - action.payload.count }
});


export default handleActions({
    [constants.ADD_TO_COUNTER]: addCounter,
    [constants.REMOVE_FROM_COUNTER]: removeCounter,
}, initialState);
