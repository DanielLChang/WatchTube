import { connect } from 'react-redux';
import { getAllVideos } from '../../../actions/video_actions';
import { shuffleVideos } from '../../../util/util_functions';
import VideoIndex from './video_index';

const mapStateToProps = ({ videos }, ownProps) => {
  if(typeof videos.list_videos !== "undefined") {
    let row1 = shuffleVideos(videos.list_videos);
    let row2 = shuffleVideos(videos.list_videos);
    let row3 = shuffleVideos(videos.list_videos);
    let row4 = shuffleVideos(videos.list_videos);
    let row5 = shuffleVideos(videos.list_videos);

    return ({
      videos: videos.list_videos,
      row1: row1, row2: row2, row3: row3, row4: row4, row5: row5
    });
  }

  return ({
    videos: videos.list_videos,
  });
};

const mapDispatchToProps = (dispatch) => ({
  getAllVideos: () => dispatch(getAllVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
