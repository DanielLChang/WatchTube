# WatchTube

[WatchTube live][heroku] N/A

WatchTube is a full-stack web application inspired by YouTube. It utilizes Ruby on Rails and a PostgreSQL database for the backend, and React/Redux framework for the frontend.

## Feature and Implementation

### Users
Users must create an account in order to view features on the site. A demo account is also provided in order for people to test the website before creating an account. Upon login the current user will be held in a store until the session is destroyed(logout).

Users will be stored in a table containing their `id`, `username`, `email`, `password_digest`, `session_token`, and `avatar`.

### Videos
Users will be able to upload videos onto the site. References to videos will be stored in a table in the PostgreSQL database containing the video `id`, `title`, `description`, `video_url`, `thumbnail`, `views`, and `user_id`.

Videos will be displayed as either a `VideoItem` or `Video`. As a `VideoItem`, the `thumbnail`, `views`, and `username` for that video will be displayed. As a `Video`, the full description will be displayed. This includes `comments` and `likes`. If a user is currently watching a video and redirects to another page that does not have a `Video`, the current `Video` will continue to play on the bottom right corner of the page.

### Comments
Users will be able to add comments to videos. Users will only be allowed to comment if they are logged in. After the addition of a comment, users will only be allowed to edit/delete comments that belong to them.

Comments will be stored in a table containing the comment `id`, `body`, `video_id`, and `user_id`.

### Likes
Videos and comments have the ability to be 'liked' or 'disliked'. Users will only allowed to like/dislike if they are logged in.

Likes will be stored in one table through polymorphic association with the like `id`, `like_value`, `user_id`, `video_id`, and `comment_id`.
