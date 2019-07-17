import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    NotFound,
    LogIn,
    Buttons,
    Checkboxes,
    PrivateRoute,
    PageForTable,
} from '../../components';
import Home from '../../components/Home';
import { Dashboard } from '../../containers';

const RoutingApp = (props: any) => {

  return (
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/buttons" component={Buttons} />
          <Route path="/checkboxes" component={Checkboxes} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/data-for-table/:data" component={PageForTable} />
          <Route component={NotFound} />
      </Switch>
  )
}

export default RoutingApp;
