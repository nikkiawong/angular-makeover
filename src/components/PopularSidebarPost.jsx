import React from 'react';
import PropTypes from 'prop-types';

function PopularSidebarPost(props) {
  return (
    <div>
      <a href={props.url}>
        <div>
          <div>
            <img src={props.image}></img>
          </div>
          <div>
            <h4>{props.headline}</h4>
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