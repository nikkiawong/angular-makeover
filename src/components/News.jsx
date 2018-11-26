import React from 'react';
import NewsVideos from './NewsVideos';
import NewsPosts from './NewsPosts';
import Sidebar from './Sidebar';

function News() {
  const articlesStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
  const newsVideosHeadlineStyles = {
    fontSize: '38px',
    textAlign: 'center',
    backgroundColor: '#dc2047',
    color: 'white',
    width: '150px',
    padding: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px'
  }
  const newsStyles = {
    width: '60%',
    marginRight: '3%'
  }
  return (
    <div style={articlesStyles}>
      <div style={newsStyles}>
        <h2 style={newsVideosHeadlineStyles}>NEWS</h2>
        <NewsVideos/>
        <NewsPosts/>
      </div>
      <Sidebar/>
    </div>
  );
}

export default News;
