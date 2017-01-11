import React from 'react';
import { Link } from 'react-router';

const greet = (currentUser, logout) => (
  <div className="header-group">
    <h1 className="header-name">Welcome, { currentUser.user.username }</h1>
    <button className="header-button" onClick={ logout }>Log Out</button>
  </div>
);

const links = () => (
  <div className="login-signup">
    <Link to="/login">Log In</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up</Link>
  </div>
);

const Greeting = ({ currentUser, logout }) => {
  // debugger;
  return (
    currentUser ? greet(currentUser, logout) : links()
  );
};

export default Greeting;
