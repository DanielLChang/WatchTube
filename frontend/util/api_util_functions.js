import React from 'react';
import VideoItem from '../components/videos/video_item';

export const getVideoDetails = (videos) => {
  if (typeof videos === 'undefined') return null;

  const videoDetails = Array.from(videos);
  return videoDetails.map((video, idx) => (
    <VideoItem key={video.id} video={video}/>
  ));
};

export const shuffleVideos = (videos) => {
  const videoList = Array.from(videos);

  for (let idx = 0; idx < videoList.length - 1; idx++) {
    const rand = Math.floor(Math.random() * (idx + 1));
    const temp = videoList[idx];
    videoList[idx] = videoList[rand];
    videoList[rand] = temp;
  }

  return videoList;
};

export const timeAgo = (createdDate) => {
  const date = new Date(createdDate);

  //time ago in seconds
  const seconds = Math.floor((new Date() - date) / 1000);
  let time;

  //check year
  time = Math.floor(seconds / 31536000);
  if (time >= 1) {
    if (time === 1) return time + ' year';
    return time + ' years';
  }

  //check month
  time = Math.floor(seconds / 2592000);
  if (time > 0) {
    if (time === 1) return time + ' month';
    return time + ' months';
  }

  //check week
  time = Math.floor(seconds / 604800);
  if (time > 0) {
    if (time === 1) return time + ' week';
    return time + ' weeks';
  }

  //check day
  time = Math.floor(seconds / 86400);
  if (time > 0) {
    if (time === 1) return time + ' day';
    return time + ' days';
  }

  //check hour
  time = Math.floor(seconds / 3600);
  if (time > 0) {
    if (time === 1) return time + ' hour';
    return time + ' hours';
  }

  //check minute
  time = Math.floor(seconds / 60);
  if (time > 0) {
    if (time === 1) return time + ' minute';
    return time + ' minutes';
  }

};
