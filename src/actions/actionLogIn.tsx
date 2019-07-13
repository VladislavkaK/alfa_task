import * as types from '../constants/login';

export const actionLogIn = (user: any) => {

    return {
        type: types.LOGIN_USER,
        user
    }
}