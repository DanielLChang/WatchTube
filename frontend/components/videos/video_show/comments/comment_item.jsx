import React from 'react';

import { timeAgo } from '../../../../util/api_util_functions';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false
    };

    this.getCommentButtons = this.getCommentButtons.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getCommentButtons(author, currentUser) {
    if (!currentUser) return null;
    if (author.id === currentUser.id) {
      return (
        <div className="comment-buttons-container">
          <div className="comment-buttons-padding">
            <button className="comment-buttons"
              onClick={ this.handleEdit }>Edit</button>
          </div>
          <div className="comment-buttons-padding">
            <button className="comment-buttons"
              onClick={ this.handleDelete }>Delete</button>
          </div>
        </div>
      );
    }
  }

  handleEdit(e) {
    e.preventDefault();
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

    return (
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
  }
}

export default CommentItem;
