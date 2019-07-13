import {
    compose, withHandlers, withState,
} from 'recompose';
import { connect } from 'react-redux';
import { actionLogIn } from '../../actions/actionLogIn';

const mapStateToProps = (state: any) => {

    return {
        success: state.login.isSuccess == undefined ? state.login.isSuccess : state.login.isSuccess,
        token: state.login.token,
        isAuth: state.login.isAuth
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        logIn: (user: any) => dispatch(actionLogIn(user))
    }
}


const asLogin = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('login', 'setLogin', ''),
    withState('password', 'setPassword', ''),
    withHandlers({
        handleUsernameChanged: (props: any) => (e: any) => {
            props.setLogin(e);
        },
        handlePasswordChanged: (props: any) => (e: any) => {
            props.setPassword(e);
        },
        onHandleLogin: (props: any) => (event: any) => {
            event.preventDefault();

            const user_login = event.target.user_login.value;
            const user_password = event.target.user_password.value;
    
            const data = {
                user_login, user_password
            };
 
            props.logIn(data);
        }
    })
)

export default asLogin;