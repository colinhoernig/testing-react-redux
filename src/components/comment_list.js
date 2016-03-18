import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const comments = props.comments.map((comment, id) => {
    return <li key={id}>{comment}</li>;
  });
  return (
    <ul className="comment-list">
      {comments}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
