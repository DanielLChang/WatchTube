import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_SOME_VIDEOS = "RECIEVE_SOME_VIDEOS";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const CREATE_VIDEO = "CREATE_VIDEO";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveSomeVideos = (videos) => ({
  type: RECEIVE_SOME_VIDEOS,
  videos
});

export const receiveVideos = (videos) => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const getSomeVideos = (query) => (dispatch) => (
  VideoAPIUtil.fetchSomeVideos(query).then(
    (videos) => dispatch(receiveSomeVideos(videos)),
      (err) => dispatch(receiveErrors(err.responseJSON))
  )
);

export const getAllVideos = () => (dispatch) => (
  VideoAPIUtil.fetchAllVideos().then(
    (videos) => dispatch(receiveVideos(videos)),
      (err) => dispatch(receiveErrors(err.responseJSON))
  )
);

export const getOneVideo = (id) => (dispatch) => (
  VideoAPIUtil.fetchVideo(id).then(
    (video) => dispatch(receiveVideo(video)),
      (err) => dispatch(receiveErrors(err.responseJSON))
  )
);
