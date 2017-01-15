import React from 'react';
import VideoItem from '../video_item';
import VideoBar from '../video_bar/video_bar';
import { shuffleVideos } from '../../../util/api_util_functions';

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

  handleResize(){
    const { count } = this.state;
    const width = $(window).width();

    if (width > 1335 && count !== 5){
      $('.video-index').width("1120px");
      this.setState({ count: 5 });
    }else if(width < 1336 && width > 1130 && count !== 4){
      $('.video-index').width("900px");
      this.setState({ count: 4 });
    }else if(width < 1131 && width > 915 && count !== 3){
      $('.video-index').width("680px");
      this.setState({ count: 3 });
    }else if(width < 916 && width > 710 && count !== 2){
      $('.video-index').width("460px");
      this.setState({ count: 2 });
    }
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
