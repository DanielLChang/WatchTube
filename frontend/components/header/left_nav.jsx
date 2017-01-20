import React from 'react';
import { Link } from 'react-router';

const LeftNav = () => (
  <div className="left-nav">
    <Link to="/">
      <img className="header-link"
        src='https://res.cloudinary.com/dxfu1kzhk/image/upload/v1484896684/Logomakr_4VzmyO_i6fvw4.png' />
    </Link>
  </div>
);

export default LeftNav;
