import React from 'react';
import VideoItem from '../videos/video_item';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllVideos();
  }

  render() {
    return (
      <div className="video-index">
        
      </div>
    );
  }
}

export default VideoIndex;
