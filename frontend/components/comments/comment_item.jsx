import React from 'react';
import EditCommentForm from './edit_comment_form';
import { timeAgo } from '../../util/api_util_functions';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false
    };

    this.getCommentButtons = this.getCommentButtons.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getCommentButtons(author, currentUser) {
    if (!currentUser) return null;
    if (author.id === currentUser.id) {
      return (
        <div className="comment-buttons-container">
          <div className="comment-buttons-padding">
            <button className="comment-buttons"
              onClick={ this.toggleEditForm }>Edit</button>
          </div>
          <div className="comment-buttons-padding">
            <button className="comment-buttons"
              onClick={ this.handleDelete }>Delete</button>
          </div>
        </div>
      );
    }
  }

  toggleEditForm(e) {
    if (e) e.preventDefault();
    if (this.state.editForm) {
      this.setState({ editForm: false });
    } else this.setState({ editForm: true });
  }

  handleDelete(e) {
    e.preventDefault();
    const { comment, deleteComment } = this.props;
    deleteComment(comment.id);
  }

  render() {
    const { currentUser, comment, updateComment } = this.props;
    const { author, body, updated_at } = comment;
    const { editForm } = this.state;

    let commentItemContainer = (
      <div className="comment-item-container">
        <img className="comment-author-avatar" src={comment.author.avatar_url}/>

        <div className="comment-item-details">
          <div className="comment-user-details">
            <div className="comment-author-username">
              {comment.author.username}
            </div>
            <div className="comment-item-date">
              {timeAgo(comment.updated_at)} ago
            </div>
          </div>

          <div className="comment-item-body">
            {comment.body}
          </div>
        </div>

        {this.getCommentButtons(author, currentUser)}

      </div>
    );

    if (editForm) {
      commentItemContainer = (
        <EditCommentForm
          currentUser={currentUser}
          comment={comment}
          processForm={updateComment}
          toggleEditForm={this.toggleEditForm}/>
      );
    }

    return (
      <div>
        {commentItemContainer}
      </div>
    );
  }
}

export default CommentItem;
