import * as React from 'react';
import ReactDOM from 'react-dom';
import { RoutingApp }  from './components';
import { createBrowserHistory as createHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store/configureStore';

// создаем миддлевары ()
const browserHistory = createHistory();

// создаем стор
const store: any = configureStore();

ReactDOM.render(
      <Provider store={store} >
      <ConnectedRouter history={browserHistory}>
        <RoutingApp />
      </ConnectedRouter>
      </Provider>, 
    document.getElementById('root')
);