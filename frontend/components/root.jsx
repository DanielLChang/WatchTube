import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { getSomeVideos } from '../actions/video_actions';
import { clearErrors } from '../actions/util_actions';

import App from './app';
import HomePageContainer from './home_page/home_page_container';
import SessionFormContainer from './session_form/session_form_container';
import VideoIndexContainer from './videos/video_index/video_index_container';
import VideoShowContainer from './videos/video_show/video_show_container';
import SearchIndexContainer from './search/search_index_container';
import VideoFormContainer from './videos/video_form/video_form_container';

const Root = ({ store }) => {

  const _clearErrors = () => {
    store.dispatch(clearErrors());
  };

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

  const _fetchSearchedVideos = (prevState, nextState) => {
    let state = nextState;
    if (typeof state === 'function') state = prevState;

    let query = state.location.query;
    store.dispatch(getSomeVideos(query));
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomePageContainer }/>
          <Router path="/signup"
            component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
          <Router path="/login"
            component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
          <Router path="videos"
            component={ VideoIndexContainer }/>
          <Router path="videos/:id"
            component={ VideoShowContainer }/>
          <Router path="search"
            component={ SearchIndexContainer }
            onEnter={ _fetchSearchedVideos }
            onChange={ _fetchSearchedVideos }/>
          <Router path="/upload"
            component={ VideoFormContainer }
            onEnter={ _ensureLoggedIn }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
