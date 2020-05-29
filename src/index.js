import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Layout from './components/Layout';
import { store } from './store/configureStore';


render(
  <HashRouter>
    <Provider store={store}>
      <Switch>
        <Route
          path="/"
          component={App}
          exact
        />
        <Route
          path="/layout1"
          component={Layout}
          exact
        />
      </Switch>
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
