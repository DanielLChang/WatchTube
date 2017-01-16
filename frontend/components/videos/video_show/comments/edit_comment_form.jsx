import React from 'react';

import { timeAgo } from '../../../../util/api_util_functions';

class EditCommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: this.props.comment.body,
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidUpdate() {
    if(this.state.body === ""){
      $(".editor-buttons .submit-button").prop('disabled',true);
    }else{
      $(".editor-buttons .submit-button").prop('disabled',false);
    }
  }

  update(e) {
    e.preventDefault();
    this.setState({ body: e.currentTarget.value });
  }

  handleCancel(e) {
    if (e) e.preventDefault();
    this.props.toggleEditForm();
  }

  handleSubmit(e) {
    if (e) e.preventDefault();

    const comment = {
      id: this.props.comment.id,
      body: this.state.body,
      user_id: this.props.comment.author.id,
      video_id: this.props.comment.video_id
    };

    this.props.processForm(comment);
    this.handleCancel();
  }

  render() {
    const { currentUser, comment, processForm, toggleEditForm } = this.props;

    return (
      <div className="edit-comment-item-container editor-creator">
        <form className="comment-form">
          <img className="edit-comment-author-avatar"
            src={ currentUser.avatar_url }/>

          <textarea
            className="edit-comment-text"
            placeholder="Add a public comment..."
            value={ this.state.body }
            onChange={ this.update }/>

          <div className="button-container group editor-buttons">
            <div className="edit-comment-buttons">
              <button className="submit-button"
                onClick={ this.handleSubmit }>Save</button>
              <button className="cancel-button"
                onClick={ this.handleCancel }>Cancel</button>
            </div>
          </div>
        </form>

      </div>
    );
  }
}

export default EditCommentForm;
