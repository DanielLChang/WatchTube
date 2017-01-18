import React from 'react';
import VideoItem from '../videos/video_item';
import VideoBar from '../videos/video_bar/video_bar';
import { shuffleVideos } from '../../util/api_util_functions';
import { Link } from 'react-router';

class HomePage extends React.Component {
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
      $('.home-page').width("1120px");
      this.setState({ count: 5 });
    }else if(width < 1336 && width > 1130 && count !== 4){
      $('.home-page').width("900px");
      this.setState({ count: 4 });
    }else if(width < 1131 && width > 915 && count !== 3){
      $('.home-page').width("680px");
      this.setState({ count: 3 });
    }else if(width < 916 && width > 710 && count !== 2){
      $('.home-page').width("460px");
      this.setState({ count: 2 });
    }
  }

  render() {
    const { videos } = this.props;
    const { count } = this.state;

    return (
      <div className="home-page">
        <div className="banner">
          <div className="banner-picture"></div>
          <h1>DIVE IN</h1>
          <h2>Start Watching.</h2>
          <Link to="/videos">More Videos</Link>
        </div>

        <VideoBar
          videos={ this.props.row1 }
          count={ count }
          title="Recommended"/>
        <VideoBar
          videos={ this.props.row2 }
          count={ count }
          title="Trending"/>
      </div>
    );
  }
}

export default HomePage;
