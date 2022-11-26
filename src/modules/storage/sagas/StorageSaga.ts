import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  IAuthUserResponse,
  LOGOUT_REQUEST,
} from '../../Auth/dux/ActionTypes';
import { takeLatest, put } from 'redux-saga/effects';
import {
  LOAD_ACCOUNT_INTO_REDUCER,
  LOAD_DEVICE_TOKENS_INTO_REDUCER,
} from '../../storage/dux/ActionTypes';
import { authAppResponse, authUserResponse, getAccountInfoResponse } from '../../Auth/dux/authActions';


const userTokenKey = 'user_tokens';
const appTokenKey = 'app_tokens';
const userAccountKey = 'user_account';
const clientIdKey = 'client_id';

/**
 * Attempts to store the user account information on the device in a secure manner
 * @param authAccountResponse
 */
export function* storeAccountOnDevice(
  authAccountResponse: any,
) {
  try {
    yield AsyncStorage.setItem(
      userAccountKey,
      JSON.stringify(authAccountResponse),
    );
  } catch (e) {
    console.log(e, '');
  }
}

/**
 * Attempts to retrieve the account information on the device in a secure manner
 */
export function* getAccountFromDevice() {
  try {
    // @ts-ignore
    const account = yield AsyncStorage.getItem(userAccountKey);
    if (account === null) {
      return null;
    }
    return JSON.parse(account);
  } catch (e) {
    console.log(e, '');
    return null;
  }
}

export function* loadAccountIntoReducer() {
  // @ts-ignore
  const account = yield getAccountFromDevice();
  yield put(getAccountInfoResponse(account));
  if (account === null) {
    return;
  }
  // yield put(setAccountObject(account));
}

/**
 * Attempts to store the user tokens on the device in a secure manner
 * @param authUserResponseParam
 */
export function* storeUserTokensOnDevice(
  authUserResponseParam: IAuthUserResponse | null,
) {
  try {
    yield AsyncStorage.setItem(
      userTokenKey,
      JSON.stringify(authUserResponseParam),
    );
  } catch (e) {
    console.log(e, '');
  }
}

/**
 * Attempts to store the user tokens on the device in a secure manner
 * @param authUserResponseParam
 */
export function* storeAppTokensOnDevice(
  authUserResponseParam: IAuthUserResponse | null,
) {
  try {
    yield AsyncStorage.setItem(
      appTokenKey,
      JSON.stringify(authUserResponseParam),
    );
  } catch (e) {
    console.log(e, '');
  }
}

/**
 * Attempts to retrieve the user tokens on the device in a secure manner
 */
export function* getUserTokensFromDevice() {
  try {
    // @ts-ignore
    const appToken = yield AsyncStorage.getItem(userTokenKey);
    if (appToken === null) {
      return null;
    }
    return JSON.parse(appToken);
  } catch (e) {
    console.log(e, '');
    return null;
  }
}

/**
 * Attempts to retrieve the user tokens on the device in a secure manner
 */
export function* getAppTokensFromDevice() {
  try {
    // @ts-ignore
    const appToken = yield AsyncStorage.getItem(appTokenKey);
    if (appToken === null) {
      return null;
    }
    return JSON.parse(appToken);
  } catch (e) {
    console.log(e, '');
    return null;
  }
}

/**
 * Attempts to load the device tokens into the application state
 */
export function* loadDeviceTokensIntoReducer() {
  console.log('~~~LOADING DEVICE TOKENS~~~');
  // @ts-ignore
  const tokens = yield getUserTokensFromDevice();
  const appTokens = yield getAppTokensFromDevice();
  if (tokens === null) {
    return;
  }
  yield put(authUserResponse(tokens));
  yield put(authAppResponse(appTokens));
  // Attempt a start-up refresh to restore access by default
  // try {
  //   const localRefreshToken = getActiveToken(refreshToken);
  //   yield put(updateUserAuthRefreshing({refreshing: true}));
  //   yield put(refreshUserRequest({refreshToken: localRefreshToken}));
  // } catch (e) {
  //   console.log(e, null);
  // }
}

/**
 * Clears the user tokens and account from the device effectively logging the user out
 */
export function* clearDeviceStorage() {
  try {
    yield AsyncStorage.multiRemove([userTokenKey, userAccountKey]);
  } catch (e) {
    console.log(e, '');
  }
}

/**
 * Attempts to retrieve the device client id, generating a new one if none is located
 */
export function* getOrCreateClientId() {
  try {
    // @ts-ignore
    let clientId = yield AsyncStorage.getItem(clientIdKey);
    if (!clientId) {
      clientId = randomString(32);
      yield AsyncStorage.setItem(clientIdKey, clientId);
      return clientId;
    }
    return clientId;
  } catch (e) {
    console.log(e, '');
    return null;
  }
}

function randomString(len: number) {
  const p = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return [...Array(len)].reduce((a) => a + p[~~(Math.random() * p.length)], '');
}

export function* watchStorage() {
  yield takeLatest(
    LOAD_DEVICE_TOKENS_INTO_REDUCER,
    loadDeviceTokensIntoReducer,
  );
  yield takeLatest(LOAD_ACCOUNT_INTO_REDUCER, loadAccountIntoReducer);
  yield takeLatest(LOGOUT_REQUEST, clearDeviceStorage);
}
