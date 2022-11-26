import {createAction} from 'redux-actions';


/**
 * Sign up
 */

 export const SIGN_UP_USER_REQUEST = 'GRANNY/SIGN_UP_USER_REQUEST';
 export const signUpUserRequest = createAction(SIGN_UP_USER_REQUEST);

 export const SIGN_UP_USER_RESPONSE = 'GRANNY/SIGN_UP_USER_RESPONSE';
 export const signUpUserResponse = createAction(SIGN_UP_USER_RESPONSE);

/**
 * App Auth
 */
export const AUTH_APP_REQUEST = 'GRANNY/AUTH_APP_REQUEST';
export const authAppRequest = createAction(AUTH_APP_REQUEST);

export const AUTH_APP_RESPONSE = 'GRANNY/AUTH_APP_RESPONSE';
export const authAppResponse = createAction(AUTH_APP_RESPONSE);

export const QUEUE_APP_TOKEN_REQUEST_OBJECT =
  'GRANNY/QUEUE_APP_TOKEN_REQUEST_OBJECT';
export const queueAppTokenRequestObject = createAction(
  QUEUE_APP_TOKEN_REQUEST_OBJECT,
);

export const UPDATE_APP_AUTH_BROKERING = 'GRANNY/UPDATE_APP_AUTH_BROKERING';
export const updateAppAuthBrokering = createAction(UPDATE_APP_AUTH_BROKERING);

export const CLEAR_APP_TOKEN_REQUEST_QUEUE =
  'GRANNY/CLEAR_APP_TOKEN_REQUEST_QUEUE';
export const clearAppTokenRequestQueue = createAction(
  CLEAR_APP_TOKEN_REQUEST_QUEUE,
);

/**
 * User Auth
 */
export const AUTH_USER_REQUEST = 'GRANNY/AUTH_USER_REQUEST';
export const authUserRequest = createAction(AUTH_USER_REQUEST);

export const AUTH_USER_RESPONSE = 'GRANNY/AUTH_USER_RESPONSE';
export const authUserResponse = createAction(AUTH_USER_RESPONSE);

export const QUEUE_USER_REQUEST_OBJECT = 'GRANNY/QUEUE_USER_REQUEST_OBJECT';
export const queueUserRequestObject = createAction(QUEUE_USER_REQUEST_OBJECT);

export const PASSWORD_RESET_REQUEST = 'GRANNY/PASSWORD_RESET_REQUEST';
export const passwordResetRequest = createAction(PASSWORD_RESET_REQUEST);

export const CREATE_ACCOUNT_REQUEST = 'GRANNY/CREATE_ACCOUNT_REQUEST';
export const createAccountRequest = createAction(CREATE_ACCOUNT_REQUEST);

export const CREATE_ACCOUNT_RESPONSE = 'GRANNY/CREATE_ACCOUNT_RESPONSE';
export const createAccountResponse = createAction(CREATE_ACCOUNT_RESPONSE);

/**
 * Get Account info
 */
export const GET_ACCOUNT_INFO_RESPONSE = 'GRANNY/GET_ACCOUNT_INFO_RESPONSE';
export const getAccountInfoResponse = createAction(GET_ACCOUNT_INFO_RESPONSE);

/**
 * Clear account info
 */
export const CLEAR_ACCOUNT_INFO_REQUEST = 'GRANNY/CLEAR_ACCOUNT_INFO_REQUEST';
export const clearAccountInfoRequest = createAction(CLEAR_ACCOUNT_INFO_REQUEST);
