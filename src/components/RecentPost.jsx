import React from 'react';
import PropTypes from 'prop-types';

function RecentPost(props) {
  const recentPostStyles = {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #d8d8d8',
    marginBottom: '20px',
    paddingBottom: '20px',
    textAlign: 'left',
    alignItems: 'flex-start'
  }
  const recentPostHeadlineStyles = {
    marginTop: '0'
  }
  const recentPostLinkStyles = {
    color: '#dc2047'
  }
  const recentPostImageDivStyles = {
    width: '70%',
    marginRight: '20px'
  }
  const recentPostImageStyles = {
    width: '100%'
  }
  const recentPostContentStyles = {
    width: '100%'
  }
  return (
    <div>
      <a style={recentPostLinkStyles} href={props.url}>
        <div style={recentPostStyles}>
          <div style={recentPostImageDivStyles}>
            <img style={recentPostImageStyles} src={props.image}></img>
          </div>
          <div style={recentPostContentStyles}>
            <h3 style={recentPostHeadlineStyles}>{props.headline}</h3>
            <p>{props.subheadline}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

RecentPost.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired
}

export default RecentPost;