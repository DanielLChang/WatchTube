import React from 'react';
import { Link } from 'react-router';

const LeftNav = () => (
  <div className="left-nav">
    <Link to="/">
      <img className="header-link"
        src='http://res.cloudinary.com/danielcloud/image/upload/v1484768881/Logomakr_0oGZcx_d5hbr1.png' />
    </Link>
  </div>
);

export default LeftNav;
