import React from 'react';
import ReactPlayer from 'react-player';
import VideoItem from '../video_item';
import VideoBar from '../video_bar/video_bar';
import { shuffleVideos } from '../../../util/util_functions';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video_url: "",
      videos: [],
      changeVideo: false
    };
  }

  componentDidMount() {
    this.props.getOneVideo(this.props.id);
    this.props.getAllVideos();

    if ((this.props.video) && (this.props.id === this.props.video.id)) {
      this.setState({ changeVideo: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.props.getOneVideo(nextProps.id);
    }
    this.setState({ videos: this.getSidebarVideos(nextProps.videos)} );
  }

  getSidebarVideos(videos) {
    if (typeof videos === 'undefined') return null;
    const sidebarVideos = shuffleVideos(videos).slice(0, 5);

    return sidebarVideos.map((video, idx) => (
      <div className="sidebar-videos" key={idx}>
        <VideoItem video={video}/>
      </div>
    ));
  }

  render() {
    // if (this.state.changeVideo) {
      const { video } = this.props;
      if (!video) return null;
      const date = new Date(video.created_date).toDateString().slice(3);

      // debugger;

      return(
        <div className="video-show-container">
          <div className="main-video-container">
            <div className='video-player'>
              <ReactPlayer
                url={video.video_url}
                controls={true}
                playing={true}/>
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

          <div className="video-sidebar-container">
            <div className="video-sidebar-title">Related Videos</div>
            <div className="video-sidebar-videos">
              {this.state.videos}
            </div>
          </div>

        </div>
      );
    // } else return null;
  }
}

export default VideoShow;
