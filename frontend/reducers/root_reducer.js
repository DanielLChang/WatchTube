import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import VideoReducer from './video_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  videos: VideoReducer
});

export default RootReducer;
