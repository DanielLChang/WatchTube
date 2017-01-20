# WatchTube

[WatchTube.stream][watchtube] is a web application inspired by YouTube for users to stream and share videos. WatchTube allows users to upload their own videos and comment on any other video as well.

WatchTube is a personal project by Daniel Chang.

[watchtube]: www.watchtube.stream

![WatchTube home page: www.watchtube.stream][home page]

[home page]: ./docs/images/home_page.png "WatchTube home page"

## Major Features
- [x] User accounts along with secure authentication
- [x] Image attachments (avatars) for each user
- [x] Streaming videos with controls
- [x] Uploading videos
- [x] Adding comments to any video
- [x] Editing and deleting own comments
- [x] Searching for videos

![video_page: www.watchtube.stream/#/videos/1][video page]

[video page]: ./docs/images/video_page.png "WatchTube video page"

## Project Design
WatchTube was designed and built in two weeks.

A [proposal][proposal] was prepared in order to provide a timeline for the development stage.

A [database schema][schema], [sample state][sample-state], and [api-endpoints][api-endpoints] were written up to aid the design process.

## Technology
WatchTube is a single-page application built using Ruby on Rails and React/Redux.
- Hosted on Heroku
- PostgreSQL database
- Cloudinary for file storage
- BCrypt for password encryption

### Future Implementations
- [ ] Video persistence
- [ ] User pages
- [ ] Tags on videos
- [ ] Likes for videos and comments
- [ ] Search for users by username
- [ ] Playlists
- [ ] Nested comments

[proposal]: ./docs/README.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md
[sample-state]: ./docs/sample-state.md
