export const SIGN_UP_URL = 'auth/sign-up';
export const OTP_VERIFY_URL = 'auth/sign-up/verify-otp/35';
export const SIGN_IN_URL = '/auth/sign-in';


export function getCheckVersionUrl(version) {
    return `/v3/app/version/${version}/check`;
}

