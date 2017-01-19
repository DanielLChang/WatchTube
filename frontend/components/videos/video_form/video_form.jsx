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
    $(".placeholder-text").hide();
    $(".loading-animation").show();
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      $(".loading-animation").hide();
      // $(".new-thumbnail").show();
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        let videoUrl = response.body.secure_url;
        let thumbUrl = videoUrl.slice(0, -3) + 'jpg';
        if (videoUrl.slice(-4) === 'webm') {
          thumbUrl = videoUrl.slice(0, -4) + 'jpg';
        }

        this.setState({
          video_url: videoUrl,
          thumbnail_url: thumbUrl
        });
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

  completeUpload() {

  }

  renderThumbnail() {
    return (
      <div className="file-upload">
        <Dropzone
          className="dropzone-upload"
          multiple={ false }
          accept="video/*"
          onDrop={this.onImageDrop.bind(this)}>
          <div>
            {this.state.thumbnail_url === '' ?
            <div>
              <div className="placeholder-text">
                Drag a video or click here to upload
              </div>

              <img className="loading-animation" hidden={true} src='https://res.cloudinary.com/danielcloud/image/upload/v1484809260/ring-alt_g2or7t.svg'></img>
            </div>
            :
            <div>
              <img className="loading-animation" hidden={true} src='https://res.cloudinary.com/danielcloud/image/upload/v1484809260/ring-alt_g2or7t.svg'></img>
              <img className="new-thumbnail" style={{display: 'inherit'}} src={this.state.thumbnail_url} width={200} height={110}></img>
            </div>}
          </div>
        </Dropzone>
      </div>
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
        <div className="video-form-container-title">
          Upload a video!
        </div>

        <form className="video-form-form" onSubmit={this.handleSubmit}>

          {this.renderThumbnail()}

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

            <label className="video-form-button-container">
              <input className="video-form-button" type="submit" value="Upload Video" />
            </label>

          </div>

        </form>

      </div>
    );
  }
}

export default withRouter(VideoForm);
