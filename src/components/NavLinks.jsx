import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  const navLinksBackgroundStyles = {
    backgroundColor: '#99073a'
  }
  const navLinksListStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyle: 'none',
    color: 'white',
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '0',
    paddingTop: '10px',
    paddingBottom: '10px'
  }
  const navLinksLinkStyles = {
    color: 'white',
    fontWeight: '700',
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0,0,.25,1)'
  }
  return (
    <div>
      <div style={navLinksBackgroundStyles}>
        <div>
          <ul style={navLinksListStyles}>
            <li><a style={navLinksLinkStyles} href="https://ohmy.disney.com/quiz/">QUIZ</a></li>
            <li><Link style={navLinksLinkStyles} to="/news">NEWS</Link></li>
            <li><a style={navLinksLinkStyles} href="https://ohmy.disney.com/quotes/">QUOTES</a></li>
            <li><a style={navLinksLinkStyles} href="https://ohmy.disney.com/movies/">MOVIES</a></li>
            <li><a style={navLinksLinkStyles} href="https://ohmy.disney.com/food/">FOOD</a></li>
            <li><a style={navLinksLinkStyles} href="https://ohmy.disney.com/parks/">PARKS</a></li>
            <li><a style={navLinksLinkStyles} href="https://ohmy.disney.com/tv/">TV</a></li>
            <li><a style={navLinksLinkStyles} href="https://ohmy.disney.com/music/">MUSIC</a></li>
            <li><a style={navLinksLinkStyles} href="https://video.disney.com/oh-my-disney">VIDEO</a></li>
            <li><a style={navLinksLinkStyles} href="https://ohmy.disney.com/shop/">SHOP</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;