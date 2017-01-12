import React from 'react';
import VideoItem from '../videos/video_item';
import VideoBar from '../video_bar/video_bar';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2
    };
  }

  componentDidMount() {
    this.props.getAllVideos();
  }

  render() {
    const { videos } = this.props;
    const { count } = this.state;
    debugger;

    return (
      <div className="video-index">
        <VideoBar videos={videos}/>
      </div>
    );
  }
}

export default VideoIndex;
