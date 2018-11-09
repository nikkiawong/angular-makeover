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
    color: '#595959',
    justifyContent: 'space-between'
  }
  return (
    <div>
      <div style={footerPostsStyles}>
        <FooterPopular/>
        <FooterFeatured/>
        <Follow/>
      </div>
    </div>
  );
}

export default FooterPosts;