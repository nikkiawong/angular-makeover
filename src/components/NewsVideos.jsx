import React from 'react';
import NewsVideo from './NewsVideo';

function NewsVideos() {
  const newsVideosStyles = {
    textAlign: 'center',
    fontSize: '16px',
    marginBottom: '30px'
  }
  const subsectionHeadlineStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  const lineStyles = {
    border: '2px solid cyan',
    width: '23%'
  }
  const subsectionH4Styles = {
    textAlign: 'center',
    fontSize: '22px',
    color: '#dc2047',
    border: '4px solid #dc2047',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '15px',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '8px',
    paddingRight: '8px',
  }
  return (
    <div style={newsVideosStyles}>
      <p>The breaking Disney news every Disney fan needs to know, with updates on everything from Walt Disney Studios, Walt Disney Animation, Disney Channel, Freeform, Disney Parks, and more. Check back here for all the latest!
      </p>
      <div style={subsectionHeadlineStyles}>
        <div style={lineStyles}></div>
          <div>
            <h4 style={subsectionH4Styles}>THE LATEST DISNEY NEWS</h4>
          </div>
        <div style={lineStyles}></div>
      </div>
      <NewsVideo/>
    </div>
  );
}

export default NewsVideos;