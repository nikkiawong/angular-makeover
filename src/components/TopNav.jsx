import React from 'react';

function TopNav() {
  const topNavStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dc2047',
    height: '80px',
    overflow: 'hidden'
  }
  const logoStyles = {
    width: '130px'
  }
  const searchStyles = {
    marginLeft: '2%'
  }
  const searchInputStyles = {
    border: '0',
    backgroundColor: 'transparent',
    fontSize: '16px'
  }
  const snsStyles = {
    marginRight: '2%',
    width: '8%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
  const snsImageStyles = {
    height: '20px'
  }
  const fbStyles = {
    height: '40px',
    marginRight: '-10px'
  }
  return (
    <div>
      <div style={topNavStyles}>
        <div style={searchStyles}>
          <input style={searchInputStyles} type="text" name="search" placeholder="SEARCH"></input>
        </div>
        <div>
          <a href="https://ohmy.disney.com/"><img src="https://pbs.twimg.com/profile_images/1016850117704290304/YbnWtN96_400x400.jpg" style={logoStyles}></img></a>
        </div>
        <div style={snsStyles}>
          <div>
            <a href="https://www.facebook.com/OhMyDisney"><img style={fbStyles} src="https://mbtskoudsalg.com/images/facebook-icon-png-white-3.png"></img></a>
          </div>
          <div>
            <a href="https://www.instagram.com/ohmydisney/"><img style={snsImageStyles} src="https://mbtskoudsalg.com/images/instagram-png-white-3.png"></img></a>
          </div>
          <div>
            <a href="https://www.youtube.com/user/OhMyDisney"><img style={snsImageStyles} src="https://mbtskoudsalg.com/images/youtube-play-button-white-png-4.png"></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;