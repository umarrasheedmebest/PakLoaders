import {takeLatest} from 'redux-saga/effects';
import {
  handleGetUser,
  handleGetUserLogin,
  handleGetUserLoginOtp,
  handleGetUserVarifyOtp,
} from './Saga/AuthSaga';
import {
  getAllPostRequestSaga,
  singlePostRequestSaga,
  createPostRequestSaga,
  cancelPostRequestSaga,
} from './Saga/PostSaga';

import {
  signupRequest,
  signupVarifyRequest,
  signinOtpVerifyRequest,
  signinRequest,
} from './slices/AuthSlice';
import {
  createPostRequest,
  getAllPostRequest,
  singlePostRequest,
  cancelPostRequest,
} from './slices/PostSlice';
export function* watcherSaga() {
  // Auth
  yield takeLatest(signupRequest.type, handleGetUser);
  yield takeLatest(signupVarifyRequest.type, handleGetUserVarifyOtp);
  yield takeLatest(signinRequest.type, handleGetUserLogin);
  yield takeLatest(signinOtpVerifyRequest.type, handleGetUserLoginOtp);
  // Post
  yield takeLatest(singlePostRequest.type, singlePostRequestSaga);
  yield takeLatest(getAllPostRequest.type, getAllPostRequestSaga);
  yield takeLatest(cancelPostRequest.type, cancelPostRequestSaga);
  yield takeLatest(createPostRequest.type, createPostRequestSaga);
}
