import React from 'react';
import SNS from './SNS';

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
  return (
    <div style={newsletterStyles}>
      <h3 style={newsletterHeadlineStyles}>GET THE OH MY DISNEY NEWSLETTER</h3>
      <a style={signUpStyles} id="sign-up" href="javascript:void(0);">SIGN UP NOW</a>
      <p><a style={newsletterLinkStyles} href="https://disneyprivacycenter.com/">Privacy Policy</a></p>
      <SNS/>
    </div>
  );
}

export default Newsletter;