json.extract! comment, :id, :body, :video_id, :updated_at

json.set! :author do
  json.partial! './api/users/user', user: comment.user
end
