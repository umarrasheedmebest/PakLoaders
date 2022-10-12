import { createAction } from 'redux-actions';
import * as constants from './constants';

export const addToCounter = createAction(constants.ADD_TO_COUNTER);
export const removeFromCounter = createAction(constants.REMOVE_FROM_COUNTER);