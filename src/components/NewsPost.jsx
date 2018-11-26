import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NewsPost(props) {
  const newsPostStyles = {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #d8d8d8',
    marginBottom: '20px',
    paddingBottom: '20px',
    textAlign: 'left',
    alignItems: 'flex-start'
  }
  const newsPostHeadlineStyles = {
    marginTop: '0'
  }
  const newsPostLinkStyles = {
    color: '#dc2047'
  }
  const newsPostImageDivStyles = {
    width: '70%',
    marginRight: '20px'
  }
  const newsPostImageStyles = {
    width: '100%'
  }
  const newsPostContentStyles = {
    width: '100%'
  }
  return (
    <div>
    <Link style={newsPostLinkStyles} to={props.url}>
      <div style={newsPostStyles}>
        <div style={newsPostImageDivStyles}>
          <img style={newsPostImageStyles} src={props.image}></img>
        </div>
        <div style={newsPostContentStyles}>
          <h3 style={newsPostHeadlineStyles}>{props.headline}</h3>
          <p>{props.subheadline}</p>
        </div>
      </div>
    </Link>
    </div>
  );
}

NewsPost.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired
}

export default NewsPost;
