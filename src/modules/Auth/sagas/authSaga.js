import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from '../../../services/client';
import { signUpUserResponse, SIGN_UP_USER_REQUEST } from '../dux/authActions';
import {
    SIGN_UP_URL
} from '../../../services/api_urls';

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
        console.warn('came in sign up response', responseData)
        yield put(signUpUserResponse({ signUpResponse: responseData }));
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
    yield takeLatest(SIGN_UP_USER_REQUEST, sigunUpUser);
}
