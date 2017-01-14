import React from 'react';
import { Link } from 'react-router';

const LeftNav = () => (
  <div className="left-nav">
    <i className="fa fa-bars" ></i>

    <Link to="/">
      <img className="header-link" src={require('../../../app/assets/images/logo-title.png')} />
    </Link>
  </div>
);

export default LeftNav;
