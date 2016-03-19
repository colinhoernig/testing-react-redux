import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  handleKeyUp(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      this.handleSubmit(event);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
      <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)} />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

// We only care about action creators, not state (no mapStateToProps)
export default connect(null, actions)(CommentBox);
