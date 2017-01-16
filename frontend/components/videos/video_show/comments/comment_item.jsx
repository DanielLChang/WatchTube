import React from 'react';

import { timeAgo } from '../../../../util/api_util_functions';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { comment } = this.props;
    // debugger;

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

      </div>
    );
  }
}

export default CommentItem;
