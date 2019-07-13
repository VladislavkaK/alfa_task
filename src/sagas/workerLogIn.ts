import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../services/loginSevice';

import * as types from '../constants/login';

export function* loginSaga(payload: any) {
    try {
        const response = yield call(loginUserService, payload);
        yield put({ type: types.LOGIN_USER_SUCCESS, response });
    } catch (error) {
        yield put({ type: types.LOGIN_USER_ERROR, error })
    }
}