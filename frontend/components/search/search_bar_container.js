import { connect } from 'react-redux';
import { getSomeVideos } from '../../actions/video_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  // debugger;
  if (typeof state.videos.list_videos === 'undefined') return { videos: [] };
  return { videos: state.videos.list_videos };
};

const mapDispatchToProps = (dispatch) => ({
  getSomeVideos: (query) => dispatch(getSomeVideos(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
