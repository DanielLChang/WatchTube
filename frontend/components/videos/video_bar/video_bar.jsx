import React from 'react';
import VideoItem from '../video_item';
import Carousel from './carousel.jsx';
import { getVideoDetails } from '../../../util/api_util_functions';

class VideoBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, videos, count } = this.props;
    if(typeof videos === 'undefined') return null;

    return(
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-title">{ title }</div>

          <Carousel videos={ getVideoDetails(videos) } numToSlide={ count }/>
        </div>
      </div>
    );
  }
}

export default VideoBar;
