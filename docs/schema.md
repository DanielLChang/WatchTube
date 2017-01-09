# Schema Information

## Users
| column name     | data type | details                         |
|-----------------|-----------|---------------------------------|
| id              | integer   | not null, primary key           |
| username        | string    | not null, indexed, unique       |
| email           | string    | not null, indexed, unique       |
| session_token   | string    | not null, indexed, unique       |
| password_digest | string    | not null                        |

## Videos
| column name     | data type | details                         |
|-----------------|-----------|---------------------------------|
| id              | integer   | not null, primary key           |
| title           | string    | not null                        |
| description     | string    | not null                        |
| video_url       | string    | not null                        |
| views           | integer   | not null                        |
| user_id         | integer   | not null, foreign key, indexed  |

## Comments
| column name     | data type | details                         |
|-----------------|-----------|---------------------------------|
| id              | integer   | not null, primary key           |
| body            | string    | not null                        |
| user_id         | integer   | not null, foreign key, indexed  |
| video_id        | integer   | not null, foreign key, indexed  |

## Likes
| column name     | data type | details                         |
|-----------------|-----------|---------------------------------|
| id              | integer   | not null, primary key           |
| like_value      | integer   | not null                        |
| user_id         | integer   | not null, foreign key, indexed  |
| video_id        | integer   | allow nil, foreign key, indexed |
| comment_id      | integer   | allow nil, foreign key, indexed |
