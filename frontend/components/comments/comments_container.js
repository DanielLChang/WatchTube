import { connect } from 'react-redux';
import { createComment,
  updateComment,
  deleteComment } from '../../actions/comment_actions';
import Comments from './comment';

const mapStateToProps = ({ session, videos }, ownProps) => ({
  videoId: videos.currentVideo.id,
  currentUser: session.currentUser,
  comments: videos.currentVideo.comments
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
