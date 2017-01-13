import React from 'react';
import { Link } from 'react-router';

import GreetingContainer from './greeting/greeting_container';
import Footer from './footer/footer';

import VideoIndex from './videos/video_index/video_index';

import ReactPlayer from 'react-player';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div className="app-page">
        <header>
          <div className="left-nav">
            <ul>
              <li>
                <i className="fa fa-bars" ></i>
              </li>
              <li>
                <Link to="/">
                  <img className="header-link" src={require('../../app/assets/images/logo-title.png')} />
                </Link>
              </li>
            </ul>

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

        <div className="middle">

          { children }
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
