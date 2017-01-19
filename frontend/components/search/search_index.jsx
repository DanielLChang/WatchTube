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
            <div className="search-video-item-thumbnail">
              <img src={video.thumbnail_url} height={140} width={250}/>
            </div>
          </Link>
          <div className="search-video-item-detail-container">
            <div className="search-video-item-title">
              <Link to={path}>{video.title}</Link>
            </div>
            <div className="search-video-item-username">
              {video.user.username}
            </div>
            <div className="search-video-item-details">
              <div className="search-video-item-date">
                {timeAgo(video.created_at)} ago · {video.views.toLocaleString()} Views
              </div>
              <div className="search-video-item-description">
                {video.description}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { videos } = this.props;

    let videoCount = 0;
    if (videos) {
      videoCount = videos.length;
    }

    // debugger;
    return (
      <div className="search-video-container">
        <div className="search-index-details">
          {videoCount} Results
        </div>
        { this.searchVideos() }
      </div>
    );
  }
}

export default SearchIndex;
