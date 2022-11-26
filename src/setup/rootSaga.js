// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';
import { watchAppAuth } from '../modules/Auth/sagas/authSaga';
import { watchStorage } from '../modules/storage/sagas/StorageSaga';
// Imports: Redux Sagas

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    fork(watchAppAuth),
    fork(watchStorage),
  ]);
}
