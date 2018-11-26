import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CommentsControl from './CommentsControl';

function PostPage() {
  const postPageBodyStyles = {
    width: '60%',
    marginRight: '3%'
  }
  return (
    <div style={postPageBodyStyles}>
      <div>
        <div>
          <img src=''></img>
        </div>
        <div>
          <h1>10 IMMERSIVE ROOMS AT “MICKEY: THE TRUE ORIGINAL EXHIBITION” HAVE BEEN ANNOUNCED</h1>
        </div>
        <div>
          <p>We are always excited to hear more about “Mickey: The True Original Exhibition” which is coming to New York City on November 8! Recently we learned about all the artists who will be participating in the 16,000-square-foot art exhibit celebrating Mickey Mouse’s 90th anniversary. Today, we have the information of all the rooms that will be on display for us to enjoy. Take a look at the list here:</p>
        </div>
        <Route exact path='/comments' component={CommentsControl}/>
      </div>
    </div>
  );
}

export default PostPage;
