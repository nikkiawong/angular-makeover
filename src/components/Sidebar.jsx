import React from 'react';
import PopularSidebar from './PopularSidebar';
import Newsletter from './Newsletter';

function Sidebar(){
  const sidebarStyles = {
    width: '25%'
  }
  return (
    <div style={sidebarStyles}>
    <Newsletter/>
      <PopularSidebar/>
    </div>
  );
}

export default Sidebar;