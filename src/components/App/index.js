import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from 'pages/Main';
import Blaz from 'pages/Blaz';
import Hardware from 'pages/Hardware';
import TwoBytes from 'pages/TwoBytes';

import { store } from '../../store/configureStore';

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Switch>
          <Route
            path="/"
            component={Main}
            exact
          />
          <Route
            path="/hardware"
            component={Hardware}
            exact
          />
          <Route
            path="/blaz"
            component={Blaz}
            exact
          />
          <Route
            path="/twobytes"
            component={TwoBytes}
            exact
          />
        </Switch>
      </Provider>
    </HashRouter>
  );
};

export default App;
