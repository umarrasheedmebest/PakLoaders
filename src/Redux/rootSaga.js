import { takeLatest } from "redux-saga/effects";
import { handleGetUser,handleGetUserLogin,handleGetUserLoginOtp,handleGetUserVarifyOtp } from "./Saga/AuthSaga";

import { signupRequest,
    signUpResponse,
    signupVarifyRequest,
    signinOtpVerifyRequest,
    signinOtpVerifyResponse,
    signinRequest,
    signinResponse,
    signupOtpResponse} from './slices/AuthSlice';
export function* watcherSaga(){
    yield takeLatest(signupRequest.type,handleGetUser)
    yield takeLatest(signupVarifyRequest.type,handleGetUserVarifyOtp)
    yield takeLatest(signinRequest.type,handleGetUserLogin)
    yield takeLatest(signinOtpVerifyRequest.type,handleGetUserLoginOtp)
}