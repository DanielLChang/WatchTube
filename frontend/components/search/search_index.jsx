import React from 'react';
import { Link, withRouter } from 'react-router';
import { timeAgo } from '../../util/api_util_functions';


class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    this.searchVideos = this.searchVideos.bind(this);
  }

  searchVideos() {
    let { videos } = this.props;
    if (!videos) return null;

    return videos.map((video, idx) => {
      let path = `/videos/${video.id}`;
      return (
        <div className="search-video-item-container" key={idx}>
          <Link to={path}>
            <div className="thumb">
              <img src={video.thumbnail_url}/>
            </div>
          </Link>
          <div className="search-video-item-link">
            <Link to={path}>{video.title}</Link>
            {video.username}
            {video.views} Views · {timeAgo(video.created_at)} ago
          </div>
          {video.description}
        </div>
      );
    });
  }

  render() {
    const { videos } = this.props;

    let videoCount = "No results found";
    if (videos) {
      videoCount = videos.length;
    }

    // debugger;
    return (
      <div className="search-video-container">
        <div className="search-index-details">
          {videoCount} Videos found
        </div>
        { this.searchVideos() }
      </div>
    );
  }
}

export default SearchIndex;
