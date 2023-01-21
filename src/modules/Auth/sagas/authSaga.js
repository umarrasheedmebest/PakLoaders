import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from '../../../services/client';


import { signInUserResponse, signUpUserResponse, SIGN_IN_USER_REQUEST, SIGN_UP_USER_REQUEST, userOtpVerifyResponse, USER_OTP_VERIFY_REQUEST,getAllPostResponse, GET_ALL_POST_REQUEST } from '../dux/authActions';
import {
    OTP_VERIFY_URL,
    SIGN_IN_URL,
    SIGN_UP_URL,
    GET_ALL_POST
} from '../../../services/api_urls';
import { requestGetPost } from '../../../services/GetPost';

export function* sigunUpUser(action) {
    try {
        const { number, full_name } = action.payload;
        const data = {
            number: number,
            full_name: full_name,
        }
        const res = yield call(request, {
            url: SIGN_UP_URL,
            method: 'POST',
            data,
        });
        const responseData = res.data;
        console.log('came in sign up response', responseData)
        yield put(signUpUserResponse({ signUpResponse: responseData }));
    } catch (e) {
        console.log('create account error', e);
    }
}

export function* optVerifyUser(action) {
    try {
        const { number, otp } = action.payload;
        const data = {
            number: number,
            otp: otp,
        }
        const res = yield call(request, {
            url: OTP_VERIFY_URL,
            method: 'POST',
            data,
        });
        const responseData = res.data;
        console.warn('came in sign up otp verify response', responseData)
        yield put(userOtpVerifyResponse({ signUpOtpVerifyResponse: responseData }));
    } catch (e) {
        console.warn('create account error', e);
    }
}

export function* signInUser(action) {
    try {
        const { number } = action.payload;
        const data = {
            number: number,
        }
        const res = yield call(request, {
            url: SIGN_IN_URL,
            method: 'POST',
            data,
            headers: { Authorization: `${accessToken}` }
        });
        const responseData = res.data;
        console.warn('came in sign sign verify response', responseData)
        yield put(signInUserResponse({ signInUserResponse: responseData }));
    } catch (e) {
        console.warn('create account error', e);
    }
}
// Get Post Details
export function* getAllPost(action) {
    try {
        // const { number, otp } = action.payload;
        // const data = {
        //     number: number,
        //     otp: otp,
        // }
        const res = yield call(requestGetPost, {
            url: GET_ALL_POST,
            method: 'GET',
            
        });
        const responseData = res.data;
        console.warn('came in sign up otp verify response', responseData)
        yield put(getAllPostResponse({ getAllPostResponse: responseData }));
    } catch (e) {
        console.warn('create account error', e);
    }
}

/**
 * Watches for the request to authenticate the application with the API
 *
 * @returns {Generator<<"FORK", ForkEffectDescriptor>, void, ?>}
 */
export function* watchAppAuth() {
    yield takeLatest(GET_ALL_POST_REQUEST,getAllPost);
    yield takeLatest(SIGN_UP_USER_REQUEST, sigunUpUser);
    yield takeLatest(USER_OTP_VERIFY_REQUEST, optVerifyUser);
    yield takeLatest(SIGN_IN_USER_REQUEST, signInUser);
}
