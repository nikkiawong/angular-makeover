import React from 'react';
import PropTypes from 'prop-types';

function RecentPost(props) {
  return (
    <div>
      <a href={props.url}>
        <div>
          <div>
            <img src={props.image}></img>
          </div>
          <div>
            <h3>{props.headline}}</h3>
            <p>{props.subheadline}}</p>
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