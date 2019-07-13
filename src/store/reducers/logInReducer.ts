import * as types from '../../constants/login';

export default function(state = [], action: any) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return LOGIN_USER_SUCCESS(state, action);
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};

function LOGIN_USER_SUCCESS(state: any, action: any) {
  let isAuth: any; // Авторизация пользователя
  let token: any;
  let isSuccess: any; // Выполнился запрос или нет
 
  if (action.hasOwnProperty('response')) {
    
        isSuccess = action.response.data.head.success;
        isAuth = action.response.data.head.isAuth;

        if (action.response.data.hasOwnProperty('body')) {
            token = action.response.data.body.token
        }

        if (isAuth) {
            localStorage.removeItem('token');
            localStorage.setItem('token', action.response.data.body.token);
        }
  }

  return { ...state, isSuccess, isAuth, token };
}