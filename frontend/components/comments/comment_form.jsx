import React from 'react';
import { withRouter } from 'react-router';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };

    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);

    this.showCommentButtons = this.showCommentButtons.bind(this);
    this.hideCommentButtons = this.hideCommentButtons.bind(this);
  }


  componentDidMount(){
    $('.comment-create-form .comment-body-input').each(function () {
      this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  }

  componentDidUpdate(){
    if(this.state.body === ""){
      $(".creator-buttons .submit-button").prop('disabled',true);
    }else{
      $(".creator-buttons .submit-button").prop('disabled',false);
    }
  }

  _ensureLoggedIn(e){
    if(!this.props.currentUser){
      this.props.router.push("/login");
    }
  }

  update(e){
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const form = this;
    const clearInput = () => {
      form.hideCommentButtons();
    };
    const comment = {
      body: this.state.body,
      user_id: this.props.currentUser.id,
      video_id: this.props.videoId
    };

    this.props.process(comment, clearInput);
  }

  showCommentButtons(e){
    if(this.state.body === ""){
      $(".comment-create-form .comment-form-submit-button").prop('disabled',true);
    }else{
      $(".comment-create-form .comment-form-submit-button").prop('disabled',false);
    }
    $(".creator-buttons").show();
    $(".comment-create-form .comment-body-input").addClass('live');
  }

  hideCommentButtons(e){
    this.setState({ body: "" });
    $(".creator-buttons").hide();
    $(".comment-create-form .comment-body-input").removeClass('live');
  }


  render(){
    const { currentUser } = this.props;

    return(
      <div className="comment-form-container comment-create-form">
        <form className="comment-form"
          onClick={this._ensureLoggedIn}
          onSubmit={this.handleSubmit}>
          <textarea
            className="comment-body-input"
            onClick={this.showCommentButtons}
            onChange={this.update}
            placeholder="Post Public Comment"
            value={this.state.body}/>
          <div className="comment-arrow"/>
          <div className="comment-shadow"/>
        </form>
        <div className="button-container group creator-buttons">
          <button onClick={this.handleSubmit} className="submit-button">Comment</button>
          <button onClick={this.hideCommentButtons}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default withRouter(CommentForm);
