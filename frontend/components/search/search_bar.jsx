import React from 'react';
import { withRouter } from 'react-router';
import Autosuggest from 'react-autosuggest';
import { uniqueWords } from '../../util/api_util_functions';

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
    return suggestions;
  }

  shouldRenderSuggestions() {
    return this.state.value.length > 1;
  }

  renderSuggestion(suggestion) {
    return (
      <div className="searchbar-suggestions">
        {suggestion}
      </div>
    );
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
    // debugger;
    this.setState({
      value: newValue
    });
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

    // debugger;

    return (
      <form className="searchbar-container" onSubmit={this.handleSubmit}>
        <div className="searchbar-input">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            shouldRenderSuggestions={this.shouldRenderSuggestions}
            renderSuggestion={this.renderSuggestion}
            onSuggestionSelected={this.handleSubmit}
            focusInputOnSuggestionClick={true}
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
