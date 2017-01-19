import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS} from '../actions/session_actions';
import { CLEAR_ERRORS } from '../actions/util_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState.errors = _nullUser.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
