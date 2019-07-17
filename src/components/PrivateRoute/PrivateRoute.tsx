import React from 'react';
import {
    Redirect,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }: any): any => {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');

        return token && token.length > 10;
    }

    if (isAuthenticated()) rest.isAuth = true;

    return (
        <Route
              {...rest}
              render={props =>
                  {
                      return (
                          (rest.isAuth) ? (
                            <Component {...props} />
                          ) : (
                              <Redirect
                                  to={{
                                      pathname: "/login"
                                  }}
                              />
                          )
                      )
                  }}
          />
    )
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.login.isAuth,
    }
}

export default connect(mapStateToProps)(PrivateRoute);
