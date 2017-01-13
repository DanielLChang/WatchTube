import React from 'react';
import { Link } from 'react-router';
import { timeAgo } from '../../util/util_functions';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video } = this.props;
    let path = `/video/${video.id}`;

    return (
      <div className="video-item">
        {/* title */}
        <Link to={path}>
          <img src={video.thumbnail_url} height={110} width={195}/>
        </Link>

        {/* details */}
        <div>
          {/* title */}
          <h3><Link to={path}>{this.title}</Link></h3>
          {/* username */}
          {/* No user page right now. Link to Home */}
          <h4><Link to='/'>{video.user.username}</Link></h4>
          {/* views and timeago */}
          <h4>{video.views} views · {timeAgo(video.created_at)} ago</h4>
        </div>
      </div>
    );
  }
}

export default VideoItem;
