import React from 'react';

class CommentsControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentsVisibleOnPage: false
    };
    this.showComments = this.showComments.bind(this);
  }

  showComments(){
    this.setState({commentsVisibleOnPage: true});
  }

  render(){
    return (
      <div>
        <p onClick={this.showComments}>See Comments</p>
      </div>
    );
  }
}

export default CommentsControl;
