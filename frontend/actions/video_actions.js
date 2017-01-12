export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const CREATE_VIDEO = "CREATE_VIDEO";

export const receiveVideos = (videos) => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video
});

export const createVideo = (video, cb) => ({
  type: CREATE_VIDEO,
  video,
  cb
});
