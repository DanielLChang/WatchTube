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

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, _nullUser, { errors });
    case CLEAR_ERRORS:
    // debugger;
      currentUser = state.currentUser;
      return merge({}, _nullUser, { currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
