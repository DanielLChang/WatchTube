import * as CommentAPIUtil from '../util/comment_api_util';

export const GET_COMMENTS = "GET_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECIEVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const getComments = (videoId) => ({
  type: GET_COMMENTS,
  videoId
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const createComment = (comment) => (dispatch) => (
  CommentAPIUtil.createComment(comment).then(
    (comment) => dispatch(receiveComment(comment))
  )
);

export const updateComment = (comment) => (dispatch) => (
  CommentAPIUtil.updateComment(comment).then(
    (comment) => dispatch(receiveComment(comment))
  )
);

export const deleteComment = (id) => (dispatch) => (
  CommentAPIUtil.deleteComment(id).then(
    (comment) => dispatch(removeComment(comment))
  )
);
