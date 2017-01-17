import { connect } from 'react-redux';
import SearchIndex from './search_index';

const mapStateToProps = (state) => ({
  videos: state.videos.searched_videos
});

export default connect(
  mapStateToProps,
  null
)(SearchIndex);
