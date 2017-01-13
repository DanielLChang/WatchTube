import React from 'react';
import { Link } from 'react-router';
import { timeAgo } from '../../util/util_functions';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video } = this.props;
    let path = `/videos/${video.id}`;

    return (
      <div className="video-item">
        {/* title */}
        <Link className="video-item-thumbnail" to={path}>
          <img src={video.thumbnail_url} height={110} width={195}/>
        </Link>

        {/* details */}
        <div>
          {/* title */}
          <h3 className="video-item-title">
            <Link to={path}>{video.title}</Link>
          </h3>
          {/* username */}
          {/* No user page right now. Link to Home */}
          <h4 className="video-item-username">
            <Link to='/'>{video.user.username}</Link>
          </h4>
          {/* views and timeago */}
          <h4 className="video-item-views">
            {video.views} views · {timeAgo(video.created_at)} ago
          </h4>
        </div>
      </div>
    );
  }
}

export default VideoItem;
