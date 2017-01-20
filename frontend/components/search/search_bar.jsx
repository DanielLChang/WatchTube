import React from 'react';
import { withRouter } from 'react-router';
import Autosuggest from 'react-autosuggest';
import { uniqueWords } from '../../util/api_util_functions';
import merge from 'lodash/merge';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      allWords: [],
      suggestions: []
    };

    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.shouldRenderSuggestions = this.shouldRenderSuggestions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllWords = this.getAllWords.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.videos !== null){
      this.getAllWords(nextProps);
    }
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getAllWords(props){
    const { videos } = props;
    let allWords = videos.map((video) => {
      return (video.title + " " + video.description).split(" ");
    });
    allWords = [].concat.apply([], allWords);
    allWords = uniqueWords(allWords.map((word) => {
      return word.replace(/^'|'$|[".,\/#!$%\^&\*;:{}=_`~()]/g,"");
    }));

    this.setState({ allWords });
  }


  getSuggestions(value) {
    const { allWords } = this.state;
    let suggestions = [""];
    const searchTerms = value.trim().split(" ");
    const testFunc = (regex) => {
      return (word) => regex.test(word);
    };

    while(searchTerms.length > 0){
      const term = searchTerms.shift();
      const escapedValue = this.escapeRegexCharacters(term);
      const regex = new RegExp(escapedValue, "i");
      let suggestedWords = allWords.filter(testFunc(regex));
      let newSuggestions = [];
      for (let i = 0; i < suggestions.length; i++) {
        for (let j = 0; j < suggestedWords.length; j++) {
          let string = (`${suggestions[i]} ${suggestedWords[j]}`).trim();
          newSuggestions.push(string.toLowerCase());
        }
      }

      suggestions = newSuggestions;
    }
    return suggestions.slice(0, 5);
  }

  shouldRenderSuggestions() {
    return this.state.value.length > 1;
  }

  renderSuggestion(suggestion, { query }) {
    let preVal = "", lastPreVal = "";
    let postVal = "", lastPostVal = "";
    let lastWordVal = "";
    let val = query;

    let suggestionSplit = suggestion.split(" ");
    let values = val.split(" ");

    if (suggestionSplit.length > 1) {
      let lastWordIdx = suggestionSplit.length - 1;
      let lastWord = suggestionSplit.pop();
      lastWordVal = values[lastWordIdx];
      let lastPreIdx = lastWord.indexOf(values[lastWordIdx]);
      lastPreVal = lastWord.slice(0, lastPreIdx);
      let lastPostIdx = lastPreIdx + values[lastWordIdx].length;
      lastPostVal = lastWord.slice(lastPostIdx);
    }
    let preWord = suggestionSplit.join(" ");

    if (values.length > 1) {
      return (
        <span className="searchbar-suggestions">
          <b className="suggestion-bold">{preWord} </b>

          {lastPreVal}
          <b className="suggestion-bold">{lastWordVal}</b>
          {lastPostVal}
        </span>
      );
    } else {
      let preIdx = suggestion.indexOf(val);
      preVal = suggestion.slice(0, preIdx);
      let postIdx = preIdx + val.length;
      postVal = suggestion.slice(postIdx);

      return (
        <span className="searchbar-suggestions">
          {preVal}
          <b className="suggestion-bold">{val}</b>
          {postVal}
        </span>
      );
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let { value } = this.state;
    value = encodeURI(value);

    // reset search
    this.setState({ value: "" });
    this.props.router.push(`/search?query=${value}`);
  }

  getSuggestionValue(suggestion){
    return suggestion;
  }

  // from react-autosuggest
  onChange(event, { newValue, method }) {
    let newState = merge({}, this.state);
    newState.value = newValue;
    this.state = merge({}, newState);
  }

  // from react-autosuggest
  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  // from react-autosuggest
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  render() {
    let { value, suggestions } = this.state;
    let inputProps = {
      value,
      onChange: this.onChange,
      placeholder: "Search"
    };

    return (
      <form className="searchbar-container" onSubmit={this.handleSubmit}>
        <div className="searchbar-input">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            onSuggestionSelected={this.handleSubmit}
            inputProps={inputProps} />
        </div>

        <button className="searchbar-submit" type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}

export default withRouter(SearchBar);
