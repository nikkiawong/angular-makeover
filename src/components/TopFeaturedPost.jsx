import React from 'react';

function TopFeaturedPost() {
  const topFeaturedPostStyles = {
    borderTop: '1px solid #d8d8d8',
    borderBottom: '1px solid #d8d8d8',
    paddingTop: '25px',
    paddingBottom: '30px',
    marginBottom: '3%'
  }
  const vidDescriptionStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  const vidTitleStyles = {
    marginLeft: '4%',
    width: '60%'
  }
  const vidTitleLinkStyles = {
    color: '#dc2047'
  }
  const topFeaturedImageStyles = {
    width: '100%'
  }
  return (
    <div style={topFeaturedPostStyles}>
      <img style={topFeaturedImageStyles} src="https://lumiere-a.akamaihd.net/v1/images/image_46568438.jpeg" alt=""></img>
      <div style={vidDescriptionStyles}>
        <div>
          <h3 style={vidTitleStyles}><a style={vidTitleLinkStyles} href="https://ohmy.disney.com/news/2018/10/09/watch-hocus-pocus-with-kenny-ortega/">WATCH HOCUS POCUS WITH DIRECTOR KENNY ORTEGA</a></h3>
        </div>
        <div>
          <p>News</p>
        </div>
      </div>
    </div>
  );
}

export default TopFeaturedPost;