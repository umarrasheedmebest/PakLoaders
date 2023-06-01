import actionCreatorFactory, {ActionCreator} from 'typescript-fsa';
import * as ActionTypes from './ActionTypes';

const actionCreator = actionCreatorFactory();

export const loadDeviceTokensIntoReducer: ActionCreator<ActionTypes.ILoadTokensRequest> = actionCreator(
  ActionTypes.LOAD_DEVICE_TOKENS_INTO_REDUCER,
);

export const loadAccountIntoReducer: ActionCreator<ActionTypes.ILoadAccountrRequest> = actionCreator(
  ActionTypes.LOAD_ACCOUNT_INTO_REDUCER,
);
