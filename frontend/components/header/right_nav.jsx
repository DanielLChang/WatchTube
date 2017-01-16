import React from 'react';
import { Link } from 'react-router';

const demoUser = {
  user: {
    username: "Demo",
    password: "password"
  }
};

class RightNav extends React.Component {
  constructor(props) {
    super(props);

    this.greet = this.greet.bind(this);
    this.links = this.links.bind(this);
  }

  greet(currentUser, logout) {
    return (
      <div className="right-nav">
        <img className="current-user-avatar" src={currentUser.avatar_url}/>
        <button className="right-nav-button" onClick={ logout }>Log Out</button>
      </div>
    );
  }

  links(login) {
    return (
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
  }

  render() {
    const { currentUser, logout, login } = this.props;

    return (
      currentUser ? this.greet(currentUser, logout) : this.links(login)
    );
  }
}

export default RightNav;
