import * as TYPE from './../action-types/index';
export function authorized(token) {
    return {
        type: TYPE.ADMIN_LOGIN,
        token
    }
}