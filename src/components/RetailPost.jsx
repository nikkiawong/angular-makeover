import React from 'react';
import PropTypes from 'prop-types';

function RetailPost(props) {
  const retailPostStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: '20px'
  }
  const retailPostImageStyles = {
    width: '100%',
    height: 'auto'
  }
  const retailCostStyles = {
    position: 'absolute',
    display: 'flex',
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    marginLeft: '10px',
    marginTop: '10px',
    textAlign: 'center'
  }
  const costStyles = {
    fontFamily: '"Roboto Condensed", sans-serif',
    fontWeight: 'bold',
    color: 'black',
    paddingTop: '0px',
    paddingLeft: '15px',
    paddingRight: '15px',
    letterSpacing: '1px',
    marginTop: '8px',
    marginBottom: '8px'
  }
  const grayStyles = {
    color: 'gray'
  }
  const retailBodyStyles = {
    position: 'absolute',
    padding: '20px'
  }
  const retailPostTextStyles = {
    color: 'white',
    marginBottom: '10px'
  }
  const shopStyles = {
    fontSize: '12px',
    fontWeight: 'bold'
  }
  const retailPostHeadlineStyles = {
    width: '58%',
    fontSize: '2vw',
    marginTop: '5px'
  }
  return (
    <div style={retailPostStyles}>
      <img style={retailPostImageStyles} src={props.image}></img>
      <div style={retailCostStyles}>
        <p style={costStyles}>$$<span style={grayStyles}>$</span></p>
      </div>
      <div style={retailBodyStyles}>
        <a style={retailPostTextStyles} href={props.url}>
        <p style={retailPostTextStyles}><span style={shopStyles}>{props.shop}</span></p>
        <h3 style={retailPostHeadlineStyles}>{props.headline}</h3>
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