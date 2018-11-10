import React from 'react';
import NewsPost from './NewsPost';

const masterNewsPostsList = [
  {
    headline: "10 Immersive Rooms at “Mickey: The True Original Exhibition” Have Been Announced",
    subheadline: "We can't wait to see them!",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/08/Mickey-The-True-Original-Exhibition-242x141.jpg",
    url: "https://ohmy.disney.com/news/2018/10/26/mickey-the-true-original-exhibition-immersive-rooms/"
  }
]

function NewsPosts() {
  return (
    <div>
      <div>
        <div></div>
      </div>
      <div>
        <h4>WALT DISNEY STUDIO NEWS</h4>
      </div>
      <div></div>
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