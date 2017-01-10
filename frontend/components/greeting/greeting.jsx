import React from 'react';
import { Link } from 'react-router';

const greet = (currentUser, logout) => (
  <div className="header-group">
    <h1 className="header-name">Welcome, { currentUser.username }</h1>
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

const Greeting = ({ currentUser, logout }) => (
  <div>
    {currentUser ? greet(currentUser, logout) : links()}
  </div>
);

export default Greeting;
