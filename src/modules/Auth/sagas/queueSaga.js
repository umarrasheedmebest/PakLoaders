import { call, put, select, take } from 'redux-saga/effects';
import { getActiveToken } from '../../../services/storage/localStorage';
import { appToken, refreshToken, userToken } from '../../../services/tokenType';
import { getAppAuthBrokering, getUserAuthRefreshing, } from '../dux/authSelectors';
import { queueAppTokenRequestObject, updateAppAuthBrokering, } from '../dux/authActions';
import { authApp } from './authSaga';
import { logoutUserRequest, refreshUserRequest, updateUserAuthRefreshing } from '../dux/Actions';
import * as ActionTypes from '../dux/ActionTypes';
import TokenError from '../../../services/errors/tokenError';

/**
 * Attempts to retrieve an app auth token, whether locally or from the API. Failure to acquire a token will throw an
 * error to the calling code.
 */
export function* getAppToken() {
    const promise = yield call(findOrLoadAppToken);
    const token = yield promise;
    console.log('USING APP TOKEN: ' + token);
    if (!token) {
        throw new TokenError('No valid app token could be acquired', appToken);
    }
    return token;
}

/**
 * Attempts to find a valid app token from application state, otherwise, it will attempt to broker a new token and
 * deliver it back in the token promise for the requesting API call
 */
function* findOrLoadAppToken() {
    // If app access is in the process of being restored, queue the token inquiry
    const appAuthBrokering = yield select(getAppAuthBrokering);
    if (appAuthBrokering) {
        const deferredRequest = getDeferredRequest();
        yield put(queueAppTokenRequestObject(deferredRequest));
        return deferredRequest.promise;
    }

    // Otherwise, attempt to locate the token from application state
    try {
        return getActiveToken(appToken);
    } catch (e) {
        // Possibility of no token, malformed token, expired token ... Queue token request and attempt a broker
        yield put(updateAppAuthBrokering(true));
        const deferredRequest = getDeferredRequest();
        yield put(queueAppTokenRequestObject(deferredRequest));
        yield authApp();
        return deferredRequest.promise;
    }
}

export function* getUserToken() {
    const token = yield call(findOrRefreshUserToken);
    if (!token) {
        console.log('No token error');
        throw new Error('No valid token could be acquired');
    }
    return token;
}

/**
 * Attempts to find a valid user token from application state, otherwise, it will attempt to refresh a user token and
 * deliver it back in the token promise for the requesting API call
 */
function* findOrRefreshUserToken() {
    // If the user access is in the process of being restored, queue the token inquiry
    const userAuthRefreshing = yield select(getUserAuthRefreshing);
    if (userAuthRefreshing) {
        const resolveAction = yield take(ActionTypes.REFRESH_TOKEN_RESOLVED);
        return resolveAction.payload.userToken;
    }
    // Otherwise, attempt to locate the token from application state
    try {
        return getActiveToken(userToken);
    } catch (e) {
        // Possibility of expired token ... Attempt to locate refresh token
        try {
            const localRefreshToken = getActiveToken(refreshToken);
            const tryUserAuthRefreshing = yield select(getUserAuthRefreshing);
            //examines getUseAuthRefreshing again in case two calls make it pass the first if block
            if (!tryUserAuthRefreshing) {
                yield put(refreshUserRequest({refreshToken: refreshToken}));
            } else {
                const resolveAction = yield take(ActionTypes.REFRESH_TOKEN_RESOLVED);
                return resolveAction.payload.userToken;
            }
            yield call(queueForRefresh, localRefreshToken);

            // Take the expressed user token from refresh resolution
            let brokeredUserToken = yield take(ActionTypes.REFRESH_TOKEN_RESOLVED);
            if (brokeredUserToken.hasOwnProperty('payload')) {
                brokeredUserToken = brokeredUserToken.payload.userToken;
            }
            console.log('TOKEN: ' + brokeredUserToken);
            return brokeredUserToken;
        } catch (ex) {
            //refresh failed, log the user out, land them on the dashboard, and show the proper dialog
            yield put(logoutUserRequest({sessionExpired: true}));
            console.log('MAJOR FAIL');
            console.log(ex);
            return null; // All tokens failed, fail the request
        }
    }
}

/**
 * Adds the inquiry for a token to the queue and attempts a refresh which may or may not have been provided
 * a token based on the ability to obtain a valid token from storage
 *
 * @param refreshToken
 */
function* queueForRefresh(refreshToken) {
    yield put(updateUserAuthRefreshing({refreshing: true}));
    yield put(refreshUserRequest({refreshToken: refreshToken}));
}

/**
 * Creates a special promise that can be resolved or rejected manually.  In this scenario, it is used to tell the
 * awaiting token requestor that either the user/app token retrieval from the API succeeded or failed
 *
 * @returns {{resolve: null, reject: null, promise: null}}
 */
function getDeferredRequest() {
    let deferredRequest = {
        promise: null,
        resolve: null,
        reject: null,
    };
    deferredRequest.promise = new Promise((resolve, reject) => {
        deferredRequest.resolve = resolve;
        deferredRequest.reject = reject;
    });
    return deferredRequest;
}
