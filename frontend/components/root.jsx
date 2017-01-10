import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';

const Root = ({ store }) => {
  const _ensureLoggedIn = () => {

  };

  const _redirectIfLoggedIn = () => {

  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } />
      </Router>
    </Provider>
  );
};
