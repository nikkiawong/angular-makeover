import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CommentsControl from './CommentsControl';

function PostPage() {
  const postPageBodyStyles = {
    width: '50%',
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
    marginTop: '-16px'
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
  const postPageImageStyles = {
    width: '100%'
  }
  const commentsDivStyles = {
    textAlign: 'center',
    marginTop: '40px'
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
          <img src='https://ohmy.disney.com/wp-content/uploads/2018/10/3900.jpg' style={postPageImageStyles}></img>
          <p>“Mickey: The True Original Exhibition” runs from November 8, 2018 to February 10, 2019, and will be open Tuesday through Sunday from 10:00 a.m. to 8:00 p.m. The exhibition is located at 60 10th Avenue in New York City. Make sure to grab your tickets at Disney.com/MickeyTrueOriginal. We can’t wait to see you there!</p>
        </div>
        <div style={commentsDivStyles}>
          <CommentsControl/>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
