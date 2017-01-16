import React from 'react';
import { Link } from 'react-router';
import { timeAgo } from '../../util/api_util_functions';

class SidebarVideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video } = this.props;
    let path = `/videos/${video.id}`;
    // debugger;

    return (
      <div className="sidebar-video-item">
        {/* title */}
        <Link to={path}>
          <img className="sidebar-video-item-thumbnail"
            src={video.thumbnail_url} height={110} width={195}/>
        </Link>

        {/* details */}
        <div className="sidebar-video-item-details">
          {/* title */}
          <div>
            <Link className="sidebar-video-item-title"
              to={path}>{video.title}</Link>
          </div>
          {/* username */}
          {/* No user page right now. Link to Home */}
          <div>
            <Link className="sidebar-video-item-username"
              to='/'>{video.user.username}</Link>
          </div>
          {/* views and timeago */}
          <div className="sidebar-video-item-views">
            {video.views.toLocaleString()} views
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarVideoItem;
