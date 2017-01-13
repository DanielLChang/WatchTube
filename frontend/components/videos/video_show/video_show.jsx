import React from 'react';
import ReactPlayer from 'react-player';
import VideoItem from '../video_item';
import { shuffleVideos } from '../../../util/util_functions';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.getOneVideo(this.props.id);
  }

  render() {
    const { video } = this.props;
    if (!video) return null;
    const date = new Date(video.created_date).toDateString().slice(3);

    // debugger;

    return(
      <div className="video-show-container">
        <div className='video-player'>
          <ReactPlayer
            url={video.video_url}
            controls={true}
            playing={false}/>
        </div>

        <div className="video-list-items">

        </div>

        <div className="video-title-container">
          <div className="video-title">{video.title}</div>
          <div className="video-username">{video.user.username}</div>
          <div className="video-views">{video.views} views</div>
        </div>

        <div className="video-detail-container">
          <div className="video-date">Published on {date}</div>
          <div className="video-description">{video.description}</div>
        </div>

        <div className="video-comments">

        </div>
      </div>
    );
  }
}

export default VideoShow;
