import React from 'react';
import RecentPosts from './RecentPosts';
import RetailPosts from './RetailPosts';

function MainArticleFeed(){
  const mainArticleFeedStyles = {
    width: '60%',
    marginRight: '3%'
  }
  return (
    <div style={mainArticleFeedStyles}>
      <RecentPosts/>
      <RetailPosts/>
    </div>
  );
}

export default MainArticleFeed;