import React from 'react';
import FooterPopular from './FooterPopular';
import FooterFeatured from './FooterFeatured';
import Follow from './Follow';

function FooterPosts(){
  const footerPostsStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '7%',
    marginRight: '7%',
    color: '#595959'
  }
  const footerPostBackgroundStyles = {
    backgroundColor: '#f9f9f9',
    marginTop: '40px'
  }
  return (
    <div style={footerPostBackgroundStyles}>
      <div style={footerPostsStyles}>
        <FooterPopular/>
        <FooterFeatured/>
        <Follow/>
      </div>
    </div>
  );
}

export default FooterPosts;