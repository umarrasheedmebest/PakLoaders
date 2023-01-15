import {
    AUTH_APP_RESPONSE,
    AUTH_USER_RESPONSE, CLEAR_ACCOUNT_INFO_REQUEST,
    CLEAR_APP_TOKEN_REQUEST_QUEUE,
    CREATE_ACCOUNT_RESPONSE,
    GET_ACCOUNT_INFO_RESPONSE,
    QUEUE_APP_TOKEN_REQUEST_OBJECT,
    SIGN_UP_USER_RESPONSE,
    UPDATE_APP_AUTH_BROKERING,
    USER_OTP_VERIFY_RESPONSE,
} from './authActions';
import {
    UPDATE_USER_AUTH_REFRESHING,
    LOGOUT_REQUEST,
    SHOW_AUTH_SPINNER,
} from './ActionTypes';
// import { SHOW_AUTH_SPINNER } from 'module/account/dux/ActionTypes';
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';


const initialState = {
    //sign up
    signUpResponse: null,

    // App Token
    appToken: null,
    appAuthBrokering: false,
    appTokenRequestQueue: [],
    appAuthError: null,
    // User Token
    userToken: null,
    userAuthRefreshing: false,
    userAuthError: null,
    isLoading: false,

    // account details
    accountDetails: [],
    createAccountResponse: [],
    signUpOtpVerifyResponse: [],
    signInUserResponse: []
};

const showAuthSpinner = (state, action) => update(state, {
    isLoading: {$set: action.payload.show}
});

const authAppResponse = (state, action) => update(state, {
    appToken: {$set: action.error ? null : action.payload},
    appAuthError: {$set: action.error ? action.payload : null}
});

const updateAppAuthBrokering = (state, action) => update(state, {
    appAuthBrokering: {$set: action.payload}
});

const clearAppTokenRequestQueue = state => update(state, {
    clearAppTokenRequestQueue: {$set: []}
});

const queueAppTokenRequestObject = (state, action) => update(state, {
    appTokenRequestQueue: {$push: [action.payload]}
});

const authUserResponse = (state, action) => update(state, {
    userToken: {$set: action.error ? null : action.payload},
    userAuthError: {$set: action.error ? action.payload : null}
});

const updateUserAuthRefreshing = (state, action) => update(state, {
    userAuthRefreshing: {$set: action.payload.refreshing ?? false},
});

const logoutRequest = state => update(state, {
    userToken: {$set: null},
    userAuthRefreshing: {$set: false},
    userTokenRequestQueue: {$set: []},
    userAuthError: {$set: null},
});

const updateAccountDetails = (state, action) => update(state, {
    accountDetails: {$set: action.payload},
});

const clearAccountInfo = (state, action) => update(state, {
    accountDetails: {$set: null}
})

const createAccount = (state, action) => update(state, {
    createAccountResponse: {$set: action.createAccountResponse},
});

const signUpUserResponse = (state, action) => update(state, {
    signUpResponse: {$set: action.signUpResponse},
});


const userOtpVerifyResponse = (state, action) => update(state, {
    signUpOtpVerifyResponse: {$set: action.signUpOtpVerifyResponse},
});

const signInUserResponse = (state, action) => update(state, {
    signInUserResponse: {$set: action.signInUserResponse},
});

export default handleActions({
    [SIGN_UP_USER_RESPONSE]: signUpUserResponse,
    [SHOW_AUTH_SPINNER]: showAuthSpinner,
    [AUTH_APP_RESPONSE]: authAppResponse,
    [UPDATE_APP_AUTH_BROKERING]: updateAppAuthBrokering,
    [CLEAR_APP_TOKEN_REQUEST_QUEUE]: clearAppTokenRequestQueue,
    [QUEUE_APP_TOKEN_REQUEST_OBJECT]: queueAppTokenRequestObject,
    [AUTH_USER_RESPONSE]: authUserResponse,
    [UPDATE_USER_AUTH_REFRESHING]: updateUserAuthRefreshing,
    [LOGOUT_REQUEST]: logoutRequest,
    [GET_ACCOUNT_INFO_RESPONSE]: updateAccountDetails,
    [CREATE_ACCOUNT_RESPONSE]: createAccount,
    [CLEAR_ACCOUNT_INFO_REQUEST]: clearAccountInfo,
    [USER_OTP_VERIFY_RESPONSE]: userOtpVerifyResponse,
    [SIGN_UP_USER_RESPONSE]: signInUserResponse,
}, initialState);
