json.extract! video, :id, :title, :description, :views

json.created_date video.created_at.date
json.thumbnail_url asset_path(video.thumbnail_url)
json.video_url asset_path(video.video.url)

json.user do
  jason.partial! '.api/users/user', user: video.user
end
