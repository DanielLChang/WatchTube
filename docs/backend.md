# Backend

WatchTube uses Ruby on Rails and Heroku as a host. The purpose of the backend is to provide RESTful APIs and responses with JSON data.

## Heroku
NewRelic application performance management (APM) automatically pings the Heroku dyno, allowing it to stake awake for quicker client response.

NewRelic will also keep track of server-side error logs.

## Database
PostrgreSQL RDBMS is used for the database

## Dependencies
Other notable dependencies:
- Cloudinary for video and image storage
- BCrypt for password-salting and hashing
