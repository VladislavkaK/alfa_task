import { takeLatest } from 'redux-saga/effects';
import { logoutSaga } from './workerLogout';

import * as types from '../constants/logout';

export default function* watchUserLogout() {
  yield takeLatest(types.LOGOUT_USER, logoutSaga);
}
