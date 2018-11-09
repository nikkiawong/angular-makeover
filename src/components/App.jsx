import React from 'react';
import Nav from './Nav';
import FooterPosts from './FooterPosts';
import FooterBottom from './FooterBottom';
import News from './News';
import MainArticleFeed from './MainArticleFeed';
import Sidebar from './Sidebar';
import { Switch, Route } from 'react-router-dom';

function App(){
  const articlesStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
  return (
    <div>
      <Nav/>
      <div style={articlesStyles}>
        <Switch>
          <Route exact path='/' component={MainArticleFeed} />
          <Route exact path='/news' component={News}/>
        </Switch>
        <Sidebar/>
      </div>
      <FooterPosts/>
      <FooterBottom/>
    </div>
  );
}

export default App;