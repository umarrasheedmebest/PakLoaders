import {takeLatest} from 'redux-saga/effects';
import {
  handleGetUser,
  handleGetUserLogin,
  handleGetUserLoginOtp,
  handleGetUserVarifyOtp,
} from './Saga/AuthSaga';
import {getAllBidsRequestSaga} from './Saga/BidsSaga';
import {
  getAllPostRequestSaga,
  singlePostRequestSaga,
  createPostRequestSaga,
  cancelPostRequestSaga,
} from './Saga/PostSaga';
import { acceptBidRequestSaga, upcomingRidesRequestSaga } from './Saga/RidesSaga';
import {
  deleteUserRequestSaga,
  getUserRequestSaga,
  updateUserImageRequestSaga,
  updateUserRequestSaga,
} from './Saga/UserSaga';

import {
  signupRequest,
  signupVarifyRequest,
  signinOtpVerifyRequest,
  signinRequest,
} from './slices/AuthSlice';
import {getAllBidsRequest} from './slices/BidsSlice';
import {
  createPostRequest,
  getAllPostRequest,
  singlePostRequest,
  cancelPostRequest,
} from './slices/PostSlice';
import { acceptBidRequest, upcomingRidesRequest } from './slices/RidesSlice';
import {
  deleteUserRequest,
  getUserRequest,
  updateUserImageRequest,
  updateUserRequest,
} from './slices/UserSlice';

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
  // User
  yield takeLatest(deleteUserRequest.type, deleteUserRequestSaga);
  yield takeLatest(getUserRequest.type, getUserRequestSaga);
  yield takeLatest(updateUserRequest.type, updateUserRequestSaga);
  yield takeLatest(updateUserImageRequest.type, updateUserImageRequestSaga);
  // Bids
  yield takeLatest(getAllBidsRequest.type, getAllBidsRequestSaga);
  // Rides
  yield takeLatest(acceptBidRequest.type,acceptBidRequestSaga);
  yield takeLatest(upcomingRidesRequest.type,upcomingRidesRequestSaga);
}
