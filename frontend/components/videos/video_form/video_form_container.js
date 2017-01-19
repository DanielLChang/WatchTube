import { connect } from 'react-redux';
import { createVideo } from '../../../actions/video_actions';
import { clearErrors } from '../../../actions/util_actions';
import VideoForm from './video_form';

//ownProps for when need to update video
const mapStateToProps = ({ session, videos }, ownProps) => {

  let currentUser;
  if (session.currentUser) {
    if (session.currentUser.success) {
      currentUser = session.currentUser.user;
    } else currentUser = session.currentUser;
  }

  let errors;
  if (videos.forms.uploadVideo) {
    errors = videos.forms.uploadVideo.errors;
  } else errors = videos.forms.errors;

  return ({
    currentUser: currentUser,
    errors: errors
  });
};

//ownProps for when need to update video
const mapDispatchToProps = (dispatch, ownProps) => ({
  createVideo: (video) => dispatch(createVideo(video)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoForm);
