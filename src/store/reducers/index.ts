import { combineReducers } from 'redux';
import login from './logInReducer'; 
import logout from './logoutReducer';

const rootReducer = combineReducers({
    login,
    logout
});

export default rootReducer;
