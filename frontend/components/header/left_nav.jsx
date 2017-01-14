import React from 'react';
import { Link } from 'react-router';

const LeftNav = () => (
  <div className="left-nav">
    <div className="bar-icon">
      <i className="fa fa-bars" ></i>
    </div>

    <Link to="/">
      <img className="header-link"
        src={require('../../../app/assets/images/logo-title.png')} />
    </Link>
  </div>
);

export default LeftNav;
