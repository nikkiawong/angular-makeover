import React from 'react';
import Nav from './Nav';
import Articles from './Articles';
import FooterPosts from './FooterPosts';
import FooterBottom from './FooterBottom';

function App(){
  return (
    <div>
      <Nav/>
      <Articles/>
      <FooterPosts/>
      <FooterBottom/>
    </div>
  );
}

export default App;