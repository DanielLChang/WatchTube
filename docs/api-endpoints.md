# HTML API
### Root
- `GET /` - loads React Web App

# JSON API
### Users
- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id`

### Session
- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Videos
- `POST /api/videos`
- `GET /api/videos`
  - Videos index/search
  - accepts query params to list videos and user
- `GET /api/videos/:id`
- `PATCH /api/videos/:id`
- `DELETE /api/videos/:id`

### Comments
- `GET /api/videos/:video_id/comments`
  - Comments index for specific video
- `POST /api/videos/:video_id/comments`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Likes
- `POST /api/videos/:video_id/likes`
  - Add like or dislike for specific video
  - User will not be able to like/dislike video more than once
- `POST /api/comments/:comment_id/likes`
  - Add like or dislike for specific comment
  - User will not be able to like/dislike comment more than once
- `DELETE /api/comment/likes/:id`
