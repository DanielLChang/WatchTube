import React from 'react';
import VideoItem from '../video_item';
import VideoBar from '../video_bar/video_bar';
import { shuffleVideos } from '../../../util/util_functions';

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

    if (width < 1335) this.setState({ count: 5 });
    if (width < 1130) this.setState({ count: 4 });
    if (width < 915) this.setState({ count: 3 });
    if (width < 710) this.setState({ count: 2 });
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
          videos={ this.props.row1 }
          count={ count }
          title="Recommended"/>
        <VideoBar
          videos={ this.props.row2 }
          count={ count }
          title="Hot"/>
        <VideoBar
          videos={ this.props.row3 }
          count={ count }
          title="Trending"/>
        <VideoBar
          videos={ this.props.row4 }
          count={ count }
          title="New"/>
        <VideoBar
          videos={ this.props.row5 }
          count={ count }
          title="Old"/>
      </div>
    );
  }
}

export default VideoIndex;
