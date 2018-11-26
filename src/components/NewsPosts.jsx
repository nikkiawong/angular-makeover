import React from 'react';
import NewsPost from './NewsPost';

const masterNewsPostsList = [
  {
    headline: "10 Immersive Rooms at “Mickey: The True Original Exhibition” Have Been Announced",
    subheadline: "We can't wait to see them!",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/08/Mickey-The-True-Original-Exhibition-242x141.jpg",
    url: "/post"
  },
  {
    headline: "EVERYTHING YOU NEED TO KNOW ABOUT THE CHARACTERS POPULATING THE INTERNET IN RALPH BREAKS THE INTERNET",
    subheadline: "Learn all about the difference between Netizens and Net Users.",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/11/yesss-ralph-breaks-the-internet-242x141.webp",
    url: "https://ohmy.disney.com/news/2018/11/16/characters-ralph-breaks-the-internet/"
  }
]

function NewsPosts() {
  const subsectionHeadlineStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  const subsectionH4Styles = {
    textAlign: 'center',
    fontSize: '22px',
    color: '#dc2047',
    border: '4px solid #dc2047',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '15px',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '8px',
    paddingRight: '8px',
  }
  const lineStyles = {
    border: '2px solid cyan',
    width: '23%'
  }
  return (
    <div>
      <div style={subsectionHeadlineStyles}>
        <div style={lineStyles}></div>
        <div>
          <h4 style={subsectionH4Styles}>WALT DISNEY STUDIO NEWS</h4>
        </div>
        <div style={lineStyles}></div>
      </div>
      {masterNewsPostsList.map((newsPost, index) =>
      <NewsPost url={newsPost.url}
      image={newsPost.image}
      headline={newsPost.headline}
      subheadline={newsPost.subheadline}
      key={index}/>
      )}
    </div>
  );
}

export default NewsPosts;
