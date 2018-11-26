import React from 'react';
import RecentPosts from './RecentPosts';
import RetailPosts from './RetailPosts';
import TopFeaturedPost from './TopFeaturedPost';
import Sidebar from './Sidebar';

function MainArticleFeed(){
  const articlesStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
  const mainArticleFeedStyles = {
    width: '60%',
    marginRight: '3%'
  }
  return (
    <div style={articlesStyles}>
      <div style={mainArticleFeedStyles}>
        <TopFeaturedPost/>
        <RecentPosts/>
        <RetailPosts/>
      </div>
      <Sidebar/>
    </div>
  );
}

export default MainArticleFeed;
