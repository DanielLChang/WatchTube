import { RECEIVE_VIDEOS, RECEIVE_VIDEO, RECEIVE_SOME_VIDEOS } from '../actions/video_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/util_actions';

import merge from 'lodash/merge';
import { getCommentIndex } from '../util/api_util_functions';

const _nullState = {
  currentVideo: null
};

const VideoReducer = (state = _nullState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  let idx;
  if (action.comment) {
    idx = getCommentIndex(newState.currentVideo.comments, action.comment);
  }

  switch (action.type) {
    case RECEIVE_SOME_VIDEOS:
      newState.searched_videos = action.videos.list_videos;
      return newState;
    case RECEIVE_VIDEOS:
      newState.list_videos = action.videos.list_videos;
      return newState;
    case RECEIVE_VIDEO:
      newState.currentVideo = action.video;
      return newState;
    case RECEIVE_COMMENT:
      if(idx !== -1) {
        newState.currentVideo.comments[idx] = action.comment;
      } else newState.currentVideo.comments.unshift(action.comment);
      return newState;
    case REMOVE_COMMENT:
      newState.currentVideo.comments.splice(idx, 1);
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
