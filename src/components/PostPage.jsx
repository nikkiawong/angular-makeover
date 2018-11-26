import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CommentsControl from './CommentsControl';

function PostPage() {
  return (
    <div>
      <div>
        <div>
          <img src=''></img>
        </div>
        <div>
          <h3>Headline</h3>
          <h4>Subheadline</h4>
        </div>
        <div>
          <p>Article main body</p>
        </div>
        <Route exact path='/comments' component={CommentsControl}/>
      </div>
    </div>
  );
}

export default PostPage;
