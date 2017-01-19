import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Link, withRouter } from 'react-router';

const CLOUDINARY_UPLOAD_PRESET = 'mimznvzb';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/danielcloud/image/upload';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: 'https://res.cloudinary.com/danielcloud/image/upload/v1484526124/defaut_avatar_qlnfg8.png',
      email: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAvatar = this.renderAvatar.bind(this);
    this.renderEmail = this.renderEmail.bind(this);
    this.renderDemo = this.renderDemo.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentDidUpdate() {
    debugger;
  }

  onImageDrop(files) {
    $(".dropzone-upload img").hide();
    $(".loading-animation").show();
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      $(".loading-animation").hide();
      $(".new-avatar").show();
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          avatar_url: response.body.secure_url
        });
      }
    });
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  renderAvatar() {
    if (this.props.formType !== "login") {
      return(
        <div>
          <div className="file-upload">
            <Dropzone
              className="dropzone-upload"
              multiple={ false }
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <div>
                {this.state.avatar_url === '' ?
                <div>
                  <img className="default-avatar" src='https://res.cloudinary.com/danielcloud/image/upload/v1484526124/defaut_avatar_qlnfg8.png'></img>
                  <img className="loading-animation" hidden={true} src='https://res.cloudinary.com/danielcloud/image/upload/v1484809260/ring-alt_g2or7t.svg'></img>
                </div>
                :
                <div>
                  <img className="loading-animation" hidden={true} src='https://res.cloudinary.com/danielcloud/image/upload/v1484809260/ring-alt_g2or7t.svg'></img>
                  <img className="new-avatar" src={this.state.avatar_url} width={50} height={50}></img>
                </div>}
              </div>
            </Dropzone>
          </div>

        </div>
      );
    } else return null;
  }

  renderEmail() {
    if (this.props.formType !== "login" ) {
      return(
        <label className="login-input">
          <input
            className="login-input-text"
            type="text"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.update("email")}/>
        </label>
      );
    } else return null;
  }

  renderDemo() {
    if (this.props.formType === "login") {
      return(
        <label className="login-input">
          <input className="login-button" type="submit" value="Demo"
            onClick={() => this.setState({
              username: "Demo",
              password: "password"
            })}></input>
        </label>
      );
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
              src='https://res.cloudinary.com/danielcloud/image/upload/v1484768881/Logomakr_0oGZcx_d5hbr1.png'/>
            <h3 className="login-form-message">
              {text} and start watching!
            </h3>

            <div className="login-input-form">

              {this.renderAvatar()}

              {this.renderEmail()}

              <label className="login-input">
                <input
                  className="login-input-text"
                  type="text"
                  placeholder="Enter your username"
                  value={this.state.username}
                  onChange={this.update("username")}/>
              </label>

              <label className="login-input">
                <input
                  className="login-input-text"
                  type="password"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.update("password")}/>
              </label>

              {this.renderErrors()}

              <label className="login-input">
                <input className="login-button" type="submit" value={text} />
              </label>

              {this.renderDemo()}

            </div>

          </form>
        </div>
      );
    }
}

export default withRouter(SessionForm);
