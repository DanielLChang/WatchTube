import React from 'react';
import { withRouter } from 'react-router';
import Autosuggest from 'react-autosuggest';

import { uniqueWords } from '../../util/api_util_functions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      all_words: [],
      suggestions: []
    };
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }


  render() {

    debugger;

    return (
      <div>

      </div>
    );
  }
}

export default SearchBar;
