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
          <div>
            
            <Link to="/" className="header-link">
              WatchTube
            </Link>
          </div>

          <div className="searchbar-placeholder">
            Searchbar placeholder
          </div>

          <GreetingContainer />
        </header>

        { children }
      </div>
    );
  }
}

export default App;
