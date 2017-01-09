# WatchTube

Heroku Link: N/A

## Minimum Viable Product

WatchTube is a web application inspired by YouTube built using Ruby on Rails and React/Redux. By the end of week 9, this app will, at the minimum, satisfy the following criteria.

### Major Features
- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Videos
- [ ] Comments
- [ ] Likes
- [ ] Searching
- [ ] Stream videos without interruption

### Bonus Features
- [ ] Tags on videos
- [ ] Infinite scrolling
- [ ] Playlists
- [ ] Nested comments

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API Endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/components-hierarchy.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md
[sample-state]: docs/sample-state.md

## Implementation Timeline

## Phase 1: Backend setup and Front End User Authentication (1 day)
**Objective:** Functioning User Authentication
- [ ] Signup and authentication (via BCrypt)
- [ ] API setup
- [ ] Redux cycle
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Styling

## Phase 2: Video Model, API, and Components (2 days)
**Objective:** CRUD for videos through API and Users
- [ ] Video Index
  - Main page w/ videos
- [ ] Video Index Row
  - Row of videos w/ scrolling
- [ ] Video Form
  - Upload Form
- [ ] Video Show Page
  - Watch Video

## Phase 3: Comment Model, API, and Components (2 days)
**Objective:** CRUD for comments through API and Users
- [ ] Comment Index (per video)
  - All comments on video show page
- [ ] Comment Item
  - Individual comment
- [ ] Comment Form
  - Add comment to videos

## Phase 4: Like Model, API, and Components (2 days)
**Objective:** CRUD for likes through API and Users
- [ ] Video likes
- [ ] Comment likes

## Phase 5: Searching (1 days)
**Objective:** Both users and videos can be searched in search bar

## Phase 6: Video Persistence (2 days)
**Objective:** Video will continue to play at bottom right corner of page while user navigates to other pages
- [ ] Video will stop playing when another video is being viewed
  Maybe have video show page on video index

## Phase 7: Cleanup (However many days are remaining)
**Objective:** Perfect UI/UX
