import { connect } from 'react-redux';
import { getAllVideos } from '../../actions/video_actions';
import { shuffleVideos } from '../../util/api_util_functions';
import HomePage from './home_page';

const mapStateToProps = ({ videos }, ownProps) => {
  if(typeof videos.list_videos !== "undefined") {
    let row1 = shuffleVideos(videos.list_videos);
    let row2 = shuffleVideos(videos.list_videos);

    return ({
      videos: videos.list_videos,
      row1: row1, row2: row2
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
)(HomePage);
