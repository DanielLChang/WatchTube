import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  renderErrors() {
    return(
      <ul className="login-signup-errors">
        {this.props.errors.map((error, idx) => (
          <li className="error-detail"key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  render() {
    const text = this.props.formType === "login" ? "Log in" : "Create account";

      return (
        <div className="login-form-container">
          <form className="login-form-form" onSubmit={this.handleSubmit}>
            <img
              className="login-form-logo"
              src={require('../../../app/assets/images/logo-title.png')}/>
            <h3 className="login-form-message">
              {text} and start watching!
            </h3>

            <div className="login-input-form">
              <label className="login-input">
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={this.state.username}
                  onChange={this.update("username")}/>
              </label>

              <label className="login-input">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.update("password")}/>
              </label>

              {this.renderErrors()}

              <label className="login-input">
                <input className="login-button" type="submit" value={text} />
              </label>
            </div>

          </form>
        </div>
      );
    }

}

export default withRouter(SessionForm);
