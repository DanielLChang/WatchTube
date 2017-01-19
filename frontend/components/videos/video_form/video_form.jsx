import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

const CLOUDINARY_UPLOAD_PRESET = 'mimznvzb';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/danielcloud/video/upload';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      views: 0,
      title: "",
      description: "",
      video_url: "",
      thumbnail_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  onImageDrop(files) {
    $(".loading-animation").show();
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      $(".loading-animation").hide();
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        let videoUrl = response.body.secure_url;
        let thumbUrl = videoUrl.slice(0, -3) + 'jpg';

        let newState = merge({}, this.state);
        newState.video_url = videoUrl;
        newState.thumbnail_url = thumbUrl;
        this.state = merge({}, newState);
      }
    });
  }

  renderErrors() {
    return(
      <ul className="video-form-errors">
        {this.props.errors.map((error, idx) => (
          <li className="error-detail"key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const video = this.state;
    this.props.createVideo({ video });
    // this.props.router.push("/");
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="video-form-container">
        <form className="video-form-form" onSubmit={this.handleSubmit}>

          <div className="file-upload">
            <Dropzone
              className="dropzone-upload"
              multiple={ false }
              accept="video/*"
              onDrop={this.onImageDrop.bind(this)}>
              <img className="loading-animation" hidden={true} src='https://res.cloudinary.com/danielcloud/image/upload/v1484809260/ring-alt_g2or7t.svg'></img>
            </Dropzone>
          </div>

          <div className="video-form">

            <label className="video-form-input">
              <input
                className="video-form-title"
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.update("title")}/>
            </label>

            <label className="video-form-input">
              <textarea
                className="video-form-description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.update("description")}/>
            </label>

            {this.renderErrors()}

            <label className="video-form-input">
              <input className="video-form-button" type="submit" value="Upload Video" />
            </label>

          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(VideoForm);
