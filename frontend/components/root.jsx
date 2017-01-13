import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import VideoIndexContainer from './videos/video_index/video_index_container';
import VideoShowContainer from './videos/video_show/video_show_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ VideoIndexContainer }/>
          <Router path="/signup"
            component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
          <Router path="/login"
            component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
          <Router path="videos/:id"
            component={ VideoShowContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
