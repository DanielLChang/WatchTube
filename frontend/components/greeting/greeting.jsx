import React from 'react';
import { Link } from 'react-router';

const greet = (currentUser, logout) => (
  <div className="header-group">
    <button className="right-nav-button" onClick={ logout }>Log Out</button>
  </div>
);

const links = () => (
  <div className="right-nav">
    <Link to="/login">
      <input className="right-nav-button" type="submit" value="Log In" />
    </Link>
    <Link to="/signup">
      <input className="right-nav-button" type="submit" value="Sign Up" />
    </Link>
  </div>
);

const Greeting = ({ currentUser, logout }) => {
  // debugger;
  return (
    currentUser ? greet(currentUser, logout) : links()
  );
};

export default Greeting;
