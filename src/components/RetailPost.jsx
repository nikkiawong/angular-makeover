import React from 'react';
import PropTypes from 'prop-types';

function RetailPost(props) {
  return (
    <div>
      <img src={props.image}></img>
      <div>
        <div>
          <p>$$<span>$</span></p>
        </div>
      </div>
      <div>
        <a href={props.url}>
        <p>{props.shop}</p>
        <h3>{props.headline}</h3>
        </a>
      </div>
    </div>
  );
}

RetailPost.propTypes = {
  headline: PropTypes.string.isRequired,
  shop: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}

export default RetailPost;

// Different Cost State for later
// <div>
//   <p class="cost">$<span class="gray">$$</span></p>
// </div>