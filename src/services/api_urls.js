export const SIGN_UP_URL = 'auth/sign-up';
export const OTP_VERIFY_URL = 'auth/sign-up/verify-otp/35';
export const SIGN_IN_URL = 'todos/1';
export const GET_ALL_POST='post/get-all/1';

export function getCheckVersionUrl(version) {
    return `/v3/app/version/${version}/check`;
}

