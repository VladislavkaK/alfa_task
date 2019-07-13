import { put, call } from 'redux-saga/effects';
import { logoutUserService } from '../services/logoutService';

import * as types from '../constants/logout';

export function* logoutSaga(payload: any) {
    try {
        const response = yield call(logoutUserService, payload);
        yield put({ type: types.LOGOUT_USER_SUCCESS, response });
    } catch (error) {
        yield put({ type: types.LOGOUT_USER_ERROR, error })
    }
}
