import React from 'react';

function Newsletter() {
  const newsletterStyles = {
    textAlign: 'center'
  }
  const newsletterHeadlineStyles = {
    color: '#3f3f3f',
    fontSize: '35px',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px'
  }
  const newsletterLinkStyles = {
    color: '#dc2047',
    fontSize: '14px'
  }
  const signUpStyles = {
    fontSize: '30px',
    fontFamily: 'Roboto Condensed, sans-serif',
    color: '#3f3f3f',
    backgroundColor: 'cyan',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '10%',
    paddingRight: '10%',
    borderRadius: '3px',
    marginBottom: '20px'
  }
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
    <div style={newsletterStyles}>
      <h3 style={newsletterHeadlineStyles}>GET THE OH MY DISNEY NEWSLETTER</h3>
      <a style={signUpStyles} id="sign-up" href="javascript:void(0);">SIGN UP NOW</a>
      <p><a style={newsletterLinkStyles} href="https://disneyprivacycenter.com/">Privacy Policy</a></p>
      <div style={sidebarSnsStyles}>
        <a href="https://www.facebook.com/OhMyDisney"><img style={sidebarSnsImageStyles} src="https://cdn3.iconfinder.com/data/icons/social-icons-5/606/Facebook.png" alt="facebook-logo"></img></a>
        <a href="https://www.instagram.com/ohmydisney"><img style={sidebarSnsImageStyles} src="https://www.sfcg.org/wp-content/uploads/2016/11/instagram-flat.png" alt="instagram-logo"></img></a>
        <a href="https://www.youtube.com/user/OhMyDisney"><img style={sidebarSnsImageStyles} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/2000px-YouTube_social_red_circle_%282017%29.svg.png" alt="youtube-logo"></img></a>
      </div>
    </div>
  );
}

export default Newsletter;