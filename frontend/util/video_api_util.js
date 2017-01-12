export const fetchAllVideos = () => (
  $.ajax({
    method: "GET",
    url: "/api/videos"
  })
);

export const fetchVideo = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/videos/${id}`
  })
);

export const createVideo = (video) => (
  $.ajax({
    method: "POST",
    url: "/api/videos",
    dataType: 'json',
    contentType: false,
    processData: false,
    data: video
  })
);

export const updateVideo = (video) => (
  $.ajax({
    method: "PATCH",
    url: `/api/videos/${video.id}`,
    contentType: false,
    processData: false,
    data: video
  })
);

export const destroyVideo = (id) => {
  $.ajax({
    method: "DELETE",
    url: `/api/videos/${id}`
  });
};
