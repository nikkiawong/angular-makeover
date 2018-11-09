import React from 'react';
import RecentPosts from './RecentPosts';
import RetailPosts from './RetailPosts';

function MainArticleFeed(){
  return (
    <div>
      <RecentPosts/>
      <RetailPosts/>
    </div>
  );
}

export default MainArticleFeed;