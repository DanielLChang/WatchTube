json.extract! video, :id, :title, :description, :views, :video_url, :thumbnail_url

json.created_date video.created_at.to_date

json.user do
  json.partial! './api/users/user', user: video.user
end
