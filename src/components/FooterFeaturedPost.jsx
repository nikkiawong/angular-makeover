import React from 'react';
import PropTypes from 'prop-types';

function FooterFeaturedPost(props) {
  const footerPopularPostStyles = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingTop: '20px'
  }
  const footerPopularImageDivStyles = {
    width: '26%',
    paddingRight: '10px'
  }
  const footerPopularImageStyles = {
    width: '100%'
  }
  const footerPopularContentStyles = {
    width: '100%'
  }
  const footerPopularHeadlineStyles = {
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '0',
    fontWeight: '300'
  }
  const footerPopularLinkStyles = {
    color: '#595959',
    fontSize: '14px'
  }
  return (
    <div>
      <a style={footerPopularLinkStyles} href={props.url}>
        <div style={footerPopularPostStyles}>
          <div style={footerPopularImageDivStyles}>
            <img style={footerPopularImageStyles} src={props.image}></img>
          </div>
          <div style={footerPopularContentStyles}>
            <h4 style={footerPopularHeadlineStyles}>{props.headline}</h4>
          </div>
        </div>
      </a>
    </div>
  );
}

export default FooterFeaturedPost;