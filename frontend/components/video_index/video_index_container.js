import { connect } from 'react-redux';
import { getAllVideos } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mapStateToProps = ({ videos }, ownProps) => {
  return ({
    videos: videos.list_videos
  });
};

// ({
//   videos: videos.list_videos
// });

const mapDispatchToProps = (dispatch) => ({
  getAllVideos: () => dispatch(getAllVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
