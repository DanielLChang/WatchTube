import React from 'react';
import { Link } from 'react-router';
import ExternalLink from './external_link';

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer-nav">
        <div className="left-footer-nav">
          <a className="github-logo" href="https://github.com/DanielLChang" >
            <i className="fa fa-github"></i>
          </a>
          <a className="linkedin-logo" href="https://www.linkedin.com/in/daniel-chang-6a7707119">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
