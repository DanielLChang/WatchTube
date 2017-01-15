import { connect } from 'react-redux';
import { getOneVideo, getAllVideos } from '../../../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = ({ session, videos }, ownProps) => ({
  id: ownProps.params.id,
  video: videos.currentVideo,
  currentUser: session.currentUser,
  videos: videos.list_videos
});

const mapDispatchToProps = (dispatch) => ({
  getOneVideo: (id) => dispatch(getOneVideo(id)),
  getAllVideos: () => dispatch(getAllVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);
