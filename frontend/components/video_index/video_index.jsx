import React from 'react';
import VideoItem from '../videos/video_item';
import VideoBar from '../video_bar/video_bar';
import { shuffleVideos } from '../../util/util_functions';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 6,
      windowWidth: window.innerWidth
    };

    this.handleResize= this.handleResize.bind(this);
  }

  componentDidMount() {
    this.props.getAllVideos();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const { count } = this.state;
    const width = $(window).width();

    if (width < 1330) this.setState({ count: 5 });
    if (width < 1125) this.setState({ count: 4 });
    if (width < 900) this.setState({ count: 3 });
    if (width < 700) this.setState({ count: 2 });
  }

  shuffle(videos) {
    if(typeof videos === "undefined") return undefined;
    return shuffleVideos(videos).slice();
  }

  render() {
    const { videos } = this.props;
    const { count } = this.state;

    return (
      <div className="video-index">
        <VideoBar
          videos={ this.shuffle(videos) }
          count={ count }
          title="Recommended"/>
        <VideoBar
          videos={ this.shuffle(videos) }
          count={ count }
          title="Hot"/>
        <VideoBar
          videos={ this.shuffle(videos) }
          count={ count }
          title="Trending"/>
        <VideoBar
          videos={ this.shuffle(videos) }
          count={ count }
          title="New"/>
        <VideoBar
          videos={ this.shuffle(videos) }
          count={ count }
          title="Old"/>
      </div>
    );
  }
}

export default VideoIndex;
