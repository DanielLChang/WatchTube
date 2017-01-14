import React from 'react';
import { Link } from 'react-router';

const demoUser = {
  user: {
    username: "Demo",
    password: "password"
  }
};

const greet = (currentUser, logout) => (
  <div className="header-group">
    <button className="right-nav-button" onClick={ logout }>Log Out</button>
  </div>
);

const links = (login) => (
  <div className="right-nav">
      <Link onClick={ () => login(demoUser) }>
       <input className="right-nav-button" type="submit" value="Demo"/>
      </Link>

      <Link to="/login">
        <input className="right-nav-button" type="submit" value="Log In" />
      </Link>
      
      <Link to="/signup">
        <input className="right-nav-button" type="submit" value="Sign Up" />
      </Link>
  </div>
);

const RightNav = ({ currentUser, logout, login}) => {
  // debugger;
  return (
    currentUser ? greet(currentUser, logout) : links(login)
  );
};

export default RightNav;
