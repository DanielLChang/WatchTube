json.extract! video, :id, :title, :description, :views, :thumbnail_url, :video_url

json.created_date video.created_at.to_date

json.user do
  json.partial! './api/users/user', user: video.user
end
