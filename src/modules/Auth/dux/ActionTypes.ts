// import {Account} from 'module/account/components/Account';

export const AUTH_ACCOUNT_RESPONSE = 'GRANNY/AUTH_ACCOUNT_RESPONSE';
export type AUTH_ACCOUNT_RESPONSE = typeof AUTH_ACCOUNT_RESPONSE;

// export interface IAuthAccountResponse {
//     account: Account;
// }

export const AUTH_USER_RESPONSE = 'GRANNY/AUTH_USER_RESPONSE';
export type AUTH_USER_RESPONSE = typeof AUTH_USER_RESPONSE;

export interface IAuthUserResponse {
    access_token: string;
    expires_in: string;
    refresh_token: string;
    token_type: string,
    scope: string,
}

export const REFRESH_USER_REQUEST = 'REFRESH_USER_REQUEST';
export type REFRESH_USER_REQUEST = typeof REFRESH_USER_REQUEST;

export interface IRefreshUserRequest {
    refreshToken: string;
}

export const UPDATE_USER_AUTH_REFRESHING = 'UPDATE_USER_AUTH_REFRESHING';
export type UPDATE_USER_AUTH_REFRESHING = typeof UPDATE_USER_AUTH_REFRESHING;

export interface IUpdateUserAuthRefreshing {
    refreshing: boolean;
}

export const REFRESH_TOKEN_RESOLVED = 'REFRESH_TOKEN_RESOLVED';
export type REFRESH_TOKEN_RESOLVED = typeof REFRESH_TOKEN_RESOLVED;

export interface IRefreshTokenResolved {
    userToken: string;
}

export const SEND_PHONENUMBER_TO_SERVER = 'SEND_PHONENUMBER_TO_SERVER';
export type SEND_PHONENUMBER_TO_SERVER = typeof SEND_PHONENUMBER_TO_SERVER;

export interface ISendPhonenumberToServerPayload {
    phoneNumber: string;
    navigation: any;
}

export const RESEND_PHONENUMBER_TO_SERVER = 'RESEND_PHONENUMBER_TO_SERVER';
export type RESEND_PHONENUMBER_TO_SERVER = typeof RESEND_PHONENUMBER_TO_SERVER;

export interface IResendPhonenumberToServerPayload {
    phoneNumber: string;
}

export const LOGOUT_USER_REQUEST = 'GRANNY/LOGOUT_USER_REQUEST';
export type LOGOUT_USER_REQUEST = typeof LOGOUT_USER_REQUEST;

export interface ILogoutUserRequest {
    sessionExpired?: boolean;
}

export const LOGOUT_REQUEST = 'GRANNY/LOGOUT_REQUEST';
export type LOGOUT_REQUEST = typeof LOGOUT_REQUEST;

export interface ILogoutRequest {
}

export const SHOW_AUTH_SPINNER = 'GRANNY/SHOW_AUTH_SPINNER';
export type SHOW_AUTH_SPINNER = typeof SHOW_AUTH_SPINNER;
export interface IShowAuthSpinner {
  show: boolean;
}

export const DELETE_ACCOUNT_REQUEST = 'GRANNY/DELETE_ACCOUNT_REQUEST';
export type DELETE_ACCOUNT_REQUEST = typeof DELETE_ACCOUNT_REQUEST;

export interface IDeleteAccountRequest {
}


export interface ILogoutRequest {
}
