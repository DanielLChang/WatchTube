import React from 'react';
import { Link } from 'react-router';

import GreetingContainer from './greeting/greeting_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <header>
          <div className="left-nav">
            <i className="fa fa-bars" aria-hidden="true"></i>
            <Link to="/" className="header-link">
              WatchTube
            </Link>
          </div>

          <div>
            <ul className="searchbar-placeholder">
              <li>
                <label>
                  <input
                    className="search-input-text"
                    type="text"
                    placeholder="Search Placeholder"/>
                </label>
              </li>
              <li>
                <i className="fa fa-search" aria-hidden="true"></i>
              </li>
            </ul>
          </div>

          <GreetingContainer />
        </header>

        { children }
      </div>
    );
  }
}

export default App;
