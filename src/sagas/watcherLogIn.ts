import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './workerLogIn';

import * as types from '../constants/login';

export default function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}
