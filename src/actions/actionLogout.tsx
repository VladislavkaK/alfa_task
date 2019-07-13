import * as types from '../constants/logout';

export const actionLogout = () => {
    return {
        type: types.LOGOUT_USER
    }
}