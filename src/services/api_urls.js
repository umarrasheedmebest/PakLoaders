export const SIGN_UP_URL = 'auth/sign-up';

export function getCheckVersionUrl(version) {
    return `/v3/app/version/${version}/check`;
}

