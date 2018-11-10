import React from 'react';

function NewsVideo() {
  const newsVideoStyles = {
    display: 'flex',
    flexDirection: 'row'
  }
  const iframeStyles = {
    width: '50%',
  }
  const leftVidStyle = {
    width: '50%',
    marginRight: '10px'
  }
  return (
    <div>
      <div style={newsVideoStyles}>
        <iframe style={leftVidStyle} width="100%" height="200" src="https://www.youtube.com/embed/2R4ZfX_XrBk" frameBorder="0"></iframe>
        <iframe style={iframeStyles} width="100%" height="200" src="https://www.youtube.com/embed/UL5xygoQwPY" frameBorder="0"></iframe>
      </div>
    </div>
  );
}

export default NewsVideo;