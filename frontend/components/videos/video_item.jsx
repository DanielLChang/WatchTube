import React from 'react';
import { Link } from 'react-router';
import { timeAgo } from '../../util/api_util_functions';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video } = this.props;
    let path = `/videos/${video.id}`;
    // debugger;

    return (
      <div className="video-item">
        {/* title */}
        <Link to={path}>
          <img className="video-item-thumbnail" src={video.thumbnail_url} height={110} width={195}/>
        </Link>

        {/* details */}
        <div>
          {/* title */}
          <div>
            <Link className="video-item-title" to={path}>{video.title}</Link>
          </div>
          {/* username */}
          {/* No user page right now. Link to Home */}
          <div className="video-item-username">
            {video.user.username}
          </div>
          {/* views and timeago */}
          <div className="video-item-views">
            {video.views.toLocaleString()} views · {timeAgo(video.created_at)} ago
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
