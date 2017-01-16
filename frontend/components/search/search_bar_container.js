import { connect } from 'react-router';
import { getSomeVideos } from '../../actions/video_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  if (typeof state.videos.list_videos === 'undefined') return { videos: null };
  return { videos: state.videos.list_videos };
};

const mapDispatchToProps = (dispatch) => ({
  getSomeVideos: (query) => dispatch(getSomeVideos(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
