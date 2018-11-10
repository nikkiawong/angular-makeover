import React from "react";
import FooterFeaturedPost from './FooterFeaturedPost';

const masterFooterFeaturedList = [
  {
    headline: "The Amazing Lineup of Stars Joining “Mickey’s 90th Spectacular” on ABC Was Announced and We Are Excited",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/09/MM90-Logo-2703-0831-black42-242x141.jpg",
    url: "https://ohmy.disney.com/news/2018/09/28/mickeys-90th-spectacular-abc-2/"
  },  
  {
    headline: "Christy Carlson Romano Will Guest Star in Big Hero 6 The Series and We Have an Exclusive Clip!",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/09/christy-carlson-romano-trina-242x141.jpg",
    url: "https://ohmy.disney.com/news/2018/09/28/christy-carlson-romano-big-hero-6-series/"
  },  
  {
    headline: "DuckTales Season 3 Is Coming to Disney Channel in 2019 and It’s a Dream Come True",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/09/DuckTales-season-3-recording-studio-242x141.jpg",
    url: "https://ohmy.disney.com/news/2018/09/21/ducktales-season-three-disney-channel/"
  },  
  {
    headline: "Meet New Characters From Ralph Breaks the Internet in the Latest Trailer!",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/09/WIR2-RGB-mono_fullcomp.0006-242x141.jpg",
    url: "https://ohmy.disney.com/news/2018/09/20/ralph-breaks-the-internet-trailer-poster/"
  }
]

function FooterFeatured(){
  const footerFeaturedStyles = {
    width: '37%',
    borderRight: '1px solid #d8d8d8',
    paddingRight: '20px',
    paddingLeft: '20px',
    marginTop: '10px',
    marginBottom: '10px'
  }
  return (
    <div style={footerFeaturedStyles}>
      <h3>Featured Posts</h3>
      {masterFooterFeaturedList.map((footerFeaturedPost, index) =>
      <FooterFeaturedPost headline={footerFeaturedPost.headline}
      image={footerFeaturedPost.image}
      url={footerFeaturedPost.url}
      key={index}/>
      )}
    </div>
  );
}

export default FooterFeatured;