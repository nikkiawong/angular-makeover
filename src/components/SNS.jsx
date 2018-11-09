import React from 'react';
import Facebook from './Facebook';
import Instagram from './Instagram';
import YouTube from './YouTube';

function SNS() {
  const sidebarSnsStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px'
  }
  const sidebarSnsImageStyles = {
    height: '40px'
  }
  return (
    <div style={sidebarSnsStyles}>
      <div style={sidebarSnsImageStyles}>
        <Facebook/>
      </div>
      <div style={sidebarSnsImageStyles}>
        <Instagram/>
      </div>
      <div style={sidebarSnsImageStyles}>
        <YouTube/>
      </div>
    </div>
  );
}

export default SNS;