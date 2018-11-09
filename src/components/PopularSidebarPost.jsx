import React from 'react';
import PropTypes from 'prop-types';

function PopularSidebarPost(props) {
  const popularSidebarPostStyles = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingTop: '20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #d8d8d8'
  }
  const popularSidebarImageDivStyles = {
    width: '50%',
    paddingRight: '10px'
  }
  const popularSidebarImageStyles = {
    width: '100%'
  }
  const popularSidebarContentStyles = {
    width: '100%'
  }
  const popularSidebarHeadlineStyles = {
    marginTop: '0',
    marginLeft: '0',
    fontWeight: '300'
  }
  const popularSidebarLinkStyles = {
    color: 'black'
  }
  return (
    <div>
      <a style={popularSidebarLinkStyles} href={props.url}>
        <div style={popularSidebarPostStyles}>
          <div style={popularSidebarImageDivStyles}>
            <img style={popularSidebarImageStyles} src={props.image}></img>
          </div>
          <div style={popularSidebarContentStyles}>
            <h4 style={popularSidebarHeadlineStyles}>{props.headline}</h4>
          </div>
        </div>
      </a>
    </div>
  );
}

PopularSidebarPost.propTypes = {
  headline: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default PopularSidebarPost;