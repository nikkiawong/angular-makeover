import React from 'react';

function Comments(){
  const commentStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
  const userImageStyles = {
    height: '50px',
    borderRadius: '50%'
  }
  const h4Styles = {
    margin: '0',
    padding: '0',
    marginBottom: '5px'
  }
  const commentTextStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '12px'
  }
  return (
    <div style={commentStyles}>
      <div>
        <img style={userImageStyles} src='https://ixxidesign.azureedge.net/media/1738962/Disney-Icon-Eeyore.jpg?width=562'></img>
      </div>
      <div style={commentTextStyles}>
        <h4 style={h4Styles}>Jane Doe</h4>
        <div>
          <p style={{margin: '0', padding: '0'}}>Awesome article!</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
