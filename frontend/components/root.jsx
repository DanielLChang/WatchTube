import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import VideoIndexContainer from './videos/video_index/video_index_container';
import VideoShowContainer from './videos/video_show/video_show_container';
import SearchIndexContainer from './search/search_index_container';

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

  // const _fetchSearchedVideos = (prevState, nextState) => {
  //   let state = nextState;
  //   if (typeof state === 'function') state = prevState;
  //
  //   let query = state.location.query;
  //   store.dispatch(searchVideos(query))
  // };

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
          <Router path="search"
            component={ SearchIndexContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
