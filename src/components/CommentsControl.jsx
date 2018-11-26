import React from 'react';
import Comments from './Comments';
import NoComments from './NoComments';

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
    console.log(this.state.commentsVisibleOnPage);
  }

  render(){
    let commentSection = null;
    if (this.state.commentsVisibleOnPage){
      commentSection = <Comments/>;
    } else {
      commentSection = <NoComments/>;
    }
    return (
      <div>
        <p style={{fontSize: '18px', textTransform: 'uppercase', fontWeight: '700', backgroundColor: 'cyan', width: '150px', padding: '5px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '25px'}} onClick={this.showComments}>See Comments</p>
        {commentSection}
      </div>
    );
  }
}

export default CommentsControl;
