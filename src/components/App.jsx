import React from 'react';
import Nav from './Nav';
import FooterPosts from './FooterPosts';
import FooterBottom from './FooterBottom';
import News from './News';
import MainArticleFeed from './MainArticleFeed';
import PostPage from './PostPage';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Nav/>
      <div>
        <Switch>
          <Route exact path='/' component={MainArticleFeed} />
          <Route exact path='/news' component={News}/>
          <Route exact path='/post' component={PostPage}/>
        </Switch>
      </div>
      <FooterPosts/>
      <FooterBottom/>
    </div>
  );
}

export default App;
