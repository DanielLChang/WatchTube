import React from 'react';
import VideoItem from '..//video_item';
import Carousel from './carousel.jsx';
import { getVideoDetails } from '../../../util/util_functions';

const VideoBar = (props) => {

  const { title, videos, count } = props;
  if(typeof videos === 'undefined') return null;

  return(
    <div className="carousel-container">
      <div className="carousel">
        <h1 className="carousel-title">{ title }</h1>
        <Carousel
          numToSlide={ count }
          videos={ getVideoDetails(videos) }/>
      </div>
    </div>
  );
};

export default VideoBar;
