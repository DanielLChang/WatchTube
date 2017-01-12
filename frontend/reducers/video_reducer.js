import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/util_actions';

import merge from 'lodash/merge';

const _nullState = {
  currentVideo: null
};

const VideoReducer = (state = _nullState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_VIDEOS:
      newState.list_videos = action.videos.list_videos;
      return newState;
    case RECEIVE_VIDEO:
      newState.currentVideo = action.video;
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      newState.forms = merge({}, _nullState, { errors });
      return newState;
    default:
      return state;
  }
};

export default VideoReducer;
