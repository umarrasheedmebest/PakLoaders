// eslint-disable-next-line @typescript-eslint/no-unused-vars
import actionCreatorFactory, {ActionCreator} from 'typescript-fsa';
import * as ActionTypes from './ActionTypes';

const actionCreator = actionCreatorFactory();

export const refreshUserRequest: ActionCreator<ActionTypes.IRefreshUserRequest> =
    actionCreator(ActionTypes.REFRESH_USER_REQUEST);

export const updateUserAuthRefreshing: ActionCreator<ActionTypes.IUpdateUserAuthRefreshing> =
    actionCreator(ActionTypes.UPDATE_USER_AUTH_REFRESHING);

export const refreshTokenResolvedAction: ActionCreator<ActionTypes.IRefreshTokenResolved> =
    actionCreator(ActionTypes.REFRESH_TOKEN_RESOLVED);

export const sendPhonenumberToServer: ActionCreator<ActionTypes.ISendPhonenumberToServerPayload> =
    actionCreator(ActionTypes.SEND_PHONENUMBER_TO_SERVER);

export const resendPhonenumberToServer: ActionCreator<ActionTypes.IResendPhonenumberToServerPayload> =
    actionCreator(ActionTypes.RESEND_PHONENUMBER_TO_SERVER);

export const logoutRequest: ActionCreator<ActionTypes.ILogoutRequest> =
    actionCreator(ActionTypes.LOGOUT_REQUEST);

export const logoutUserRequest: ActionCreator<ActionTypes.ILogoutUserRequest> = actionCreator(ActionTypes.LOGOUT_USER_REQUEST);

export const deleteAccountRequest: ActionCreator<ActionTypes.IDeleteAccountRequest> = actionCreator(ActionTypes.DELETE_ACCOUNT_REQUEST);

export const showAuthSpinner: ActionCreator<
  ActionTypes.IShowAuthSpinner | Error
> = actionCreator(ActionTypes.SHOW_AUTH_SPINNER);