import {createAction} from 'redux-actions';


/**
 * Sign up
 */

 export const SIGN_UP_USER_REQUEST = 'PAKLOADERS/SIGN_UP_USER_REQUEST';
 export const signUpUserRequest = createAction(SIGN_UP_USER_REQUEST);

 export const SIGN_UP_USER_RESPONSE = 'PAKLOADERS/SIGN_UP_USER_RESPONSE';
 export const signUpUserResponse = createAction(SIGN_UP_USER_RESPONSE);

/**
 * Sign In
 */

 export const USER_OTP_VERIFY_REQUEST = 'PAKLOADERS/USER_OTP_VERIFY_REQUEST';
 export const userOtpVerfiyRequest = createAction(USER_OTP_VERIFY_REQUEST);

 export const USER_OTP_VERIFY_RESPONSE = 'PAKLOADERS/USER_OTP_VERIFY_RESPONSE';
 export const userOtpVerifyResponse = createAction(USER_OTP_VERIFY_RESPONSE);

 /**
 * Sign In
 */

  export const SIGN_IN_USER_REQUEST = 'PAKLOADERS/SIGN_IN_USER_REQUEST';
  export const signInUserRequest = createAction(SIGN_IN_USER_REQUEST);
 
  export const SIGN_IN_USER_RESPONSE = 'PAKLOADERS/SIGN_IN_USER_RESPONSE';
  export const signInUserResponse = createAction(SIGN_IN_USER_RESPONSE);

/**
* All Post Get
 */

  export const GET_ALL_POST_REQUEST = 'PAKLOADERS/GET_ALL_POST';
  export const getAllPostRequest = createAction(GET_ALL_POST_REQUEST);
 
  export const GET_ALL_POST_RESPONSE = 'PAKLOADERS/SIGN_IN_USER_RESPONSE';
  export const getAllPostResponse = createAction(GET_ALL_POST_RESPONSE);

/**
 * App Auth
 */
export const AUTH_APP_REQUEST = 'PAKLOADERS/AUTH_APP_REQUEST';
export const authAppRequest = createAction(AUTH_APP_REQUEST);

export const AUTH_APP_RESPONSE = 'PAKLOADERS/AUTH_APP_RESPONSE';
export const authAppResponse = createAction(AUTH_APP_RESPONSE);

export const QUEUE_APP_TOKEN_REQUEST_OBJECT =
  'PAKLOADERS/QUEUE_APP_TOKEN_REQUEST_OBJECT';
export const queueAppTokenRequestObject = createAction(
  QUEUE_APP_TOKEN_REQUEST_OBJECT,
);

export const UPDATE_APP_AUTH_BROKERING = 'PAKLOADERS/UPDATE_APP_AUTH_BROKERING';
export const updateAppAuthBrokering = createAction(UPDATE_APP_AUTH_BROKERING);

export const CLEAR_APP_TOKEN_REQUEST_QUEUE =
  'PAKLOADERS/CLEAR_APP_TOKEN_REQUEST_QUEUE';
export const clearAppTokenRequestQueue = createAction(
  CLEAR_APP_TOKEN_REQUEST_QUEUE,
);

/**
 * User Auth
 */
export const AUTH_USER_REQUEST = 'PAKLOADERS/AUTH_USER_REQUEST';
export const authUserRequest = createAction(AUTH_USER_REQUEST);

export const AUTH_USER_RESPONSE = 'PAKLOADERS/AUTH_USER_RESPONSE';
export const authUserResponse = createAction(AUTH_USER_RESPONSE);

export const QUEUE_USER_REQUEST_OBJECT = 'PAKLOADERS/QUEUE_USER_REQUEST_OBJECT';
export const queueUserRequestObject = createAction(QUEUE_USER_REQUEST_OBJECT);

export const PASSWORD_RESET_REQUEST = 'PAKLOADERS/PASSWORD_RESET_REQUEST';
export const passwordResetRequest = createAction(PASSWORD_RESET_REQUEST);

export const CREATE_ACCOUNT_REQUEST = 'PAKLOADERS/CREATE_ACCOUNT_REQUEST';
export const createAccountRequest = createAction(CREATE_ACCOUNT_REQUEST);

export const CREATE_ACCOUNT_RESPONSE = 'PAKLOADERS/CREATE_ACCOUNT_RESPONSE';
export const createAccountResponse = createAction(CREATE_ACCOUNT_RESPONSE);

/**
 * Get Account info
 */
export const GET_ACCOUNT_INFO_RESPONSE = 'PAKLOADERS/GET_ACCOUNT_INFO_RESPONSE';
export const getAccountInfoResponse = createAction(GET_ACCOUNT_INFO_RESPONSE);

/**
 * Clear account info
 */
export const CLEAR_ACCOUNT_INFO_REQUEST = 'PAKLOADERS/CLEAR_ACCOUNT_INFO_REQUEST';
export const clearAccountInfoRequest = createAction(CLEAR_ACCOUNT_INFO_REQUEST);
