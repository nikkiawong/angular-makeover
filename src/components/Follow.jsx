import React from "react";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import YouTube from "./YouTube";

function Follow(){
  const followStyles = {
    marginTop: '10px',
    paddingLeft: '20px',
    paddingRight: '20px'
  }
  const followListStyles = {
    listStyle: 'none',
    lineHeight: '2.5',
    marginLeft: '0',
    paddingLeft: '0'
  }
  const followListItemStyles = {
    display: 'flex',
    alignItems: 'center'
  }
  const followImageStyles = {
    height: '25px',
    marginRight: '8px'
  }
  const followLinkStyles = {
    fontSize: '14px',
    color: '#3f3f3f'
  }
  return (
    <div style={followStyles}>
      <h3>Follow</h3>
      <ul style={followListStyles}>
        <li style={followListItemStyles}><div style={followImageStyles}><Facebook/></div><a style={followLinkStyles} href="https://www.facebook.com/OhMyDisney">Facebook</a></li>
        <li style={followListItemStyles}><div style={followImageStyles}><Instagram/></div><a style={followLinkStyles} href="https://www.facebook.com/OhMyDisney">Instagram</a></li>
        <li style={followListItemStyles}><div style={followImageStyles}><YouTube/></div><a style={followLinkStyles} href="https://www.facebook.com/OhMyDisney">YouTube</a></li>
      </ul>
    </div>
  );
}

export default Follow;