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
          <div className="video-item-title">
            <Link to={path}>{video.title}</Link>
          </div>
          {/* username */}
          {/* No user page right now. Link to Home */}
          <div className="video-item-username">
            <Link to='/'>{video.user.username}</Link>
          </div>
          {/* views and timeago */}
          <div className="video-item-views">
            {video.views} views · {timeAgo(video.created_at)} ago
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
