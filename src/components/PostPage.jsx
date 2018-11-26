import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CommentsControl from './CommentsControl';

function PostPage() {
  const postPageBodyStyles = {
    width: '42%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '20px',
    lineHeight: '30px',
    marginTop: '150px'
  }
  const bgImageStyles = {
    backgroundImage: 'url(https://ohmy.disney.com/wp-content/uploads/2018/08/Mickey-The-True-Original-Exhibition-1200x380.jpg)',
    height: '50vh',
    width: '100vw',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: '-20px'
  }
  const h1Styles = {
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -27%)',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '19px'
  }
  const textHighlightStyles = {
    backgroundColor: '#dc2047',
    color: 'white',
    display: 'inline',
    padding: '8px'
  }
  return (
    <div>
      <div>
        <div style={bgImageStyles}>
        </div>
        <div style={h1Styles}>
          <h1 style={textHighlightStyles}>10 IMMERSIVE ROOMS AT “MICKEY: THE TRUE ORIGINAL EXHIBITION” HAVE BEEN ANNOUNCED</h1>
        </div>
        <div style={postPageBodyStyles}>
          <p>We are always excited to hear more about “Mickey: The True Original Exhibition” which is coming to New York City on November 8! Recently we learned about all the artists who will be participating in the 16,000-square-foot art exhibit celebrating Mickey Mouse’s 90th anniversary. Today, we have the information of all the rooms that will be on display for us to enjoy. Take a look at the list here:</p>
        </div>
        <Route exact path='/comments' component={CommentsControl}/>
      </div>
    </div>
  );
}

export default PostPage;
