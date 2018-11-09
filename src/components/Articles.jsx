import React from 'react';
import MainArticleFeed from './MainArticleFeed';
import Sidebar from './Sidebar';

function Articles(){
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
    <div style={articlesStyles}>
      <MainArticleFeed/>
      <Sidebar/>
    </div>
  );
}

export default Articles;