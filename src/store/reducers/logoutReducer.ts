import * as types from '../../constants/logout';

export default function(state = [], action: any) {
  const response = action.response;

  switch(action.type) {
    case types.LOGOUT_USER_SUCCESS:
        return LOGOUT_USER_SUCCESS(state, action)
    case types.LOGOUT_USER_ERROR:
        return { ...state, response };  
    default:
      return state;
  }
};

function LOGOUT_USER_SUCCESS(state: any, action: any) {
  const response = action.response.data;
  let isAuth: any; // Авторизация пользователя
  let isSuccess: any; // Выполнился запрос или нет

  if (action.hasOwnProperty('response')) {
    isSuccess = action.response.data.head.success;
    isAuth = action.response.data.head.isAuth;
  }

  if (!action.response.data.head.token) {
      localStorage.removeItem('token');
  }

  return { ...state, response, isSuccess, isAuth };

};