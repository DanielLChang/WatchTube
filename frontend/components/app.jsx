import React from 'react';
import { Link } from 'react-router';

import GreetingContainer from './greeting/greeting_container';
import Footer from './footer/footer';

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

        <div className="body">

          //test video
          <div className="video-item">
            <Link to='/'><img src='https://dl.dropboxusercontent.com/s/tlmpw6mtkfh1fqp/I%27ll%20Be%20There.png?dl=0' width={640} height={360}/></Link>
          </div>

          <div className="video-player">
            <ReactPlayer url='https://dl.dropboxusercontent.com/s/zisao7ejqm86dnb/I%27ll%20Be%20There.mp4?dl=0' controls={true} width={640} height={360} playing/>
          </div>

          { children }
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
