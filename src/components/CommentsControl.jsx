import React from 'react';

class CommentsControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentsVisibleOnPage: false
    };
  }

  render(){
    return (
      <div>
        <p>CommentsControl</p>
      </div>
    );
  }
}

export default CommentsControl;
