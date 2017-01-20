import React from 'react';
import { Link } from 'react-router';

const LeftNav = () => (
  <div className="left-nav">
    <Link to="/">
      <img className="header-link"
        src='https://res.cloudinary.com/danielcloud/image/upload/v1484875836/Logomakr_9FRHmE_xojgk5.png' />
    </Link>
  </div>
);

export default LeftNav;
