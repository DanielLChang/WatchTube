import React from 'react';
import { Link } from 'react-router';
import { timeAgo } from '../../util/util_functions';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video } = this.props;
    debugger;
    let path = `/video/${video.id}`;

    return (
      <div className="video-item">
        //thumbnail
        <Link to={path}><img src={video.thumbnail_url}/></Link>

        //details
        <div>
          //title
          <h3><Link to={path}>{this.title}</Link></h3>
          //username
          //no user page now. for now link to home page
          <h4><Link to='/'>{this.user.username}</Link></h4>
          //views & timeago
          <h4>{video.views} views · {timeAgo(video.created_date)} ago</h4>
        </div>
      </div>
    );
  }
}

export default VideoItem;
