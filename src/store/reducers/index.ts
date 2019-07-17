import { combineReducers } from 'redux';
import login from './logInReducer'; 

const rootReducer = combineReducers({
    login
});

export default rootReducer;
