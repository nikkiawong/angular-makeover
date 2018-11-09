import React from 'react';
import TopNav from './TopNav';
import NavLinks from './NavLinks';

function Nav(){
  const navStyles = {
    width: '100%',
    zIndex: '100'
  }
  return (
    <div style={navStyles}>
      <TopNav/>
      <NavLinks/>
    </div>
  );
}

export default Nav;