import * as React from 'react';
import { Header } from '../../containers';
import Form from 'arui-feather/form';
import FormField from 'arui-feather/form-field';
import Input from 'arui-feather/input';
import Button from 'arui-feather/button';
import { Redirect } from 'react-router-dom';
import './styles/style.scss';

const LogIn = (props: any) => {

  let renderComponent;

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');

    return token && token.length > 10;
  }

  if (isAuthenticated()) {
    renderComponent = <Redirect to={{ pathname: '/dashboard' }} />
  } else {
    renderComponent = (
      <React.Fragment>
          <Header />
          <main className="main__container" >
            <div>
              <h2 className="main__container--title" >
                Авторизация
                  </h2>
              <Form onSubmit={(e: any) => props.onHandleLogin(e)}>
                <FormField>
                  <div className='row' >
                    <Input
                      placeholder='Введите ваш логин'
                      size='l'
                      name='user_login'
                      value={props.login}
                      onChange={props.handleUsernameChanged}
                    />
                  </div>
                  <div className='row' >
                    <Input
                      placeholder='Введите ваш пароль'
                      size='l'
                      type='password'
                      name='user_password'
                      value={props.password}
                      onChange={(e: any) => props.handlePasswordChanged(e)}
                    />
                  </div>
                </FormField>
                <FormField>
                  <Button view='extra' type='submit'>Войти</Button>
                </FormField>
              </Form>
            </div>
          </main>
      </React.Fragment>
    )
  }

  return (
    <div className="component__login">
        {renderComponent}
    </div>
  )
}

export default LogIn;
