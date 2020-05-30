import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from 'pages/Main';
import Blaz from 'pages/Blaz';

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
            path="/blaz"
            component={Blaz}
            exact
          />
        </Switch>
      </Provider>
    </HashRouter>
  );
};

export default App;
