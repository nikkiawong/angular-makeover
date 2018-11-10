import React from 'react';
import RecentPosts from './RecentPosts';
import RetailPosts from './RetailPosts';
import TopFeaturedPost from './TopFeaturedPost';

function MainArticleFeed(){
  const mainArticleFeedStyles = {
    width: '60%',
    marginRight: '3%'
  }
  return (
    <div style={mainArticleFeedStyles}>
      <TopFeaturedPost/>
      <RecentPosts/>
      <RetailPosts/>
    </div>
  );
}

export default MainArticleFeed;