import React from 'react';

import { timeAgo } from '../../../../util/api_util_functions';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { comment } = this.props;

    return (
      <div className="comment-item-container">
        <div className="comment-item-author">
          {comment.author.username}
        </div>
        <div className="comment-item-date">
          {timeAgo(comment.updated_at)} ago
        </div>
        <div className="comment-item-body">
          {comment.body}
        </div>
      </div>
    );
  }
}

export default CommentItem;
