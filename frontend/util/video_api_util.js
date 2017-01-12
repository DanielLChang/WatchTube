export const fetchAllVideos = (success, error) => (
  $.ajax({
    method: "GET",
    url: "/api/videos",
    success,
    error
  })
);

export const fetchVideo = (id, success, error) => (
  $.ajax({
    method: "GET",
    url: `/api/videos/${id}`,
    success,
    error
  })
);

export const createVideo = (video, success, error) => (
  $.ajax({
    method: "POST",
    url: "/api/videos",
    dataType: 'json',
    contentType: false,
    processData: false,
    data: video,
    success,
    error
  })
);

export const editVideo = (video, success, error) => (
  $.ajax({
    method: "PATCH",
    url: `/api/videos/${video.id}`,
    contentType: false,
    processData: false,
    data: video,
    success,
    error
  })
);

export const destroyVideo = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/videos/${id}`,
    success,
    error
  });
};
