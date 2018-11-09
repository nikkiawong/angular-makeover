import React from 'react';
import FooterPopular from './FooterPopular';
import FooterFeatured from './FooterFeatured';
import Follow from './Follow';

function FooterPosts(){
  return (
    <div>
      <FooterPopular/>
      <FooterFeatured/>
      <Follow/>
    </div>
  );
}

export default FooterPosts;