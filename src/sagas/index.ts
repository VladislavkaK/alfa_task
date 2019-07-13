import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './watcherLogIn';
import watchUserLogout from './watcherLogout';

export default function* startForman() {
    yield fork(watchUserAuthentication);
    yield fork(watchUserLogout);
}
