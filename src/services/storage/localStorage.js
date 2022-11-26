import { store } from '../../setup/store';
import { appToken, userToken } from '../tokenType';
import TokenError from '../errors/tokenError';
import { datetimeHasTranspired } from '../dateUtils';
import moment from 'moment';
import { refreshToken } from '../tokenType';
import { isNil } from 'lodash';

/**
 * Attempts to retrieve a valid token based on the type provided
 *
 * @param tokenType
 */
const getActiveToken = (tokenType) => {
    switch (tokenType) {
        case appToken:
            return getLocalAppToken();
        case userToken:
            return getLocalUserToken();
        case refreshToken:
            return getLocalRefreshToken();
    }
};

/**
 * Attempts to retrieve the app token from the Redux store
 */
const getLocalAppToken = () => {
    //TODO brittle reference
    let token = store.getState().auth.appToken;
    return token.access_token;
};

/**
 * Attempts to retrieve the user token from the Redux store
 */
const getLocalUserToken = () => {
    //TODO brittle reference
    let token = store.getState().auth.userToken;
    return token.access_token;
};

/**
 * Attempts to retrieve the refresh token from the Redux store
 */
const getLocalRefreshToken = () => {
    let token = store.getState().auth.userToken;
    let expiryDate = store.getState().auth.userToken.refresh_token_expiry;

    return token.refresh_token;
};

/**
 * Attempts to verify that the user is authed from storage
 */
// export const isAuthed = () => {
//     try {
//         const account = store.getState().account.userAccount;
//         if (
//             isNil(account) ||
//             isNil(account.first_name) ||
//             isNil(account.last_name) ||
//             isNil(account.identities) ||
//             account.first_name.length === 0 ||
//             account.last_name.length === 0 ||
//             account.identities.length < 2
//         ) {
//             return false;
//         }
//         const foundEmailIdentity = account.identities.find(
//             (identity) => identity.type === 'email',
//         );
//         if (isNil(foundEmailIdentity)) {
//             return false;
//         }
//         if (
//             isNil(foundEmailIdentity.value) ||
//             foundEmailIdentity.value.length === 0
//         ) {
//             return false;
//         }
//     } catch (e) {
//         console.log(e);
//         return false;
//     }

//     try {
//         getActiveToken(userToken);
//         return true;
//     } catch (e) {
//         console.log(e);
//         try {
//             getActiveToken(refreshToken);
//             return true;
//         } catch (ex) {
//             console.log(ex);
//             return false;
//         }
//     }
// };

// export const hasActiveAuthToken = () => {
//     try {
//         getActiveToken(userToken);
//         return true;
//     } catch (e) {
//         console.log(e);
//         try {
//             getActiveToken(refreshToken);
//             return true;
//         } catch (ex) {
//             console.log(ex);
//             return false;
//         }
//     }
// };

export { getActiveToken };
