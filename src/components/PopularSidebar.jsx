import React from "react";
import PopularSidebarPost from './PopularSidebarPost';

const masterPopularSidebarList = [
  {
    headline: "Introducing the Oh My Disney ’90s Flashback Collection, Now Available at Disney Store and shopDisney",
    image:  "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_90sCollection.jpg",
    url:  "https://ohmy.disney.com/news/2018/10/15/oh-my-disney-90s-flashback-collection-shopdisney-disney-store/"
  },
  {
    headline: "The First Aladdin Teaser Is Here and We’ll Have the Chills Forever",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/10/featured-sunlit-thumb-250x188.webp",
    url: "https://ohmy.disney.com/news/2018/10/11/first-aladdin-teaser-trailer/"
  },
  {
    headline: "Your Zodiac Sign Can Tell Us Your Top 3 Favorite Disney Movies",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_ZodiacSignFaveMovie-1.jpg",
    url: "https://ohmy.disney.com/quiz/2018/10/04/quiz-zodiac-favorite-disney-movies/"
  },
  {
    headline: "Freeform Is Getting Us Hyped for the Holidays Earlier Than Ever With Their Kickoff to Christmas Schedule",
    image: "https://ohmy.disney.com/wp-content/uploads/2014/11/The-Santa-Clause-250x188.webp",
    url: "https://ohmy.disney.com/news/2018/10/10/freeform-kickoff-to-christmas-schedule/"
  }
]

function PopularSidebar(){
  return (
    <div>
      {masterPopularSidebarList.map((popularSidebarPost, index) =>
      <PopularSidebarPost headline={popularSidebarPost.headline}
      image={popularSidebarPost.image}
      url={popularSidebarPost.url}
      key={index}/>
      )}
    </div>
  );
}

export default PopularSidebar;