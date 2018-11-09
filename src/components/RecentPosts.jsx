import React from "react";
import RecentPost from './RecentPost';

const masterRecentPostsList = [
  {
    "headline": "YOU MUST CHECK OUT THESE AMAZING WORKS OF ART FROM THE GALLERY NUCLEUS EXHIBITION CELEBRATING 20 YEARS OF MULAN",
    "subheadline": "The tribute exhibition runs from October 20 to November 4.",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_Mulan-art-show.jpg",
    "url": "https://ohmy.disney.com/news/2018/10/18/mulan-tribute-exhibition-gallery-nucleus-art/"
    },
    {
    "headline": "ADVENTURES BY DISNEY’S NEW YORK CITY SHORT ESCAPE IS A BROADWAY FAN’S DREAM COME TRUE",
    "subheadline": "We had the best time!",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_AdventuresByDisneyNYC.jpg",
    "url": "https://ohmy.disney.com/parks/2018/10/18/adventures-by-disney-new-york-city-broadway/"
    },
    {
    "headline": "EXCLUSIVE: HERE IS THE SET LIST FOR DISNEY NIGHT ON DANCING WITH THE STARS",
    "subheadline": "Some excellent choices all around!",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_DancingWithTheStarsDisneyNight.jpg",
    "url": "https://ohmy.disney.com/news/2018/10/17/dancing-with-the-stars-disney-night-season-27/"
    },
    {
    "headline": "SELECT YOUR BIRTH DATE AND WE’LL TELL YOU WHICH DISNEY VILLAIN IS YOUR SOUL MATE",
    "subheadline": "The most wicked horoscope to ever exist.",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_VillainSoulMate.jpg",
    "url": "https://ohmy.disney.com/quiz/2018/10/17/quiz-select-birth-date-disney-villain-soul-mate/"
    },
    {
    "headline": "THESE ARE THE DISNEY SONGS YOU COULD HEAR LIVE IN A CAPPELLA ON DCAPPELLA’S UPCOMING TOUR",
    "subheadline": "Check out the tracklist for their upcoming album!",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_DcappellasUpcomingTour.jpg",
    "url": "https://ohmy.disney.com/news/2018/10/15/dcappella-album-tracklist-tour-dates/"
    },
    {
    "headline": "CAN WE GUESS YOUR FAVORITE DISNEY PRINCESS BASED ON YOUR FAVORITE DISNEY SONGS?",
    "subheadline": "These are tough decisions.",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_FavePrincessFaveSong.jpg",
    "url": "https://ohmy.disney.com/quiz/2018/10/15/quiz-guess-favorite-disney-princess-disney-songs/"
    },
    {
    "headline": "INTRODUCING THE OH MY DISNEY ’90S FLASHBACK COLLECTION, NOW AVAILABLE AT DISNEY STORE AND SHOPDISNEY",
    "subheadline": "Our most rad collection yet.",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_90sCollection.jpg",
    "url": "https://ohmy.disney.com/news/2018/10/15/oh-my-disney-90s-flashback-collection-shopdisney-disney-store/"
    },
    {
    "headline": "WHICH OBSCURE DISNEY PIXAR CHARACTER SHOULD YOU BE FOR HALLOWEEN?",
    "subheadline": "Get creative with your Disney•Pixar costume!",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_ObscureHalloweenCostume-1.jpg",
    "url": "https://ohmy.disney.com/quiz/2018/10/12/quiz-obscure-disney-pixar-character-halloween/"
    },
    {
    "headline": "HERE’S THE COMPLETE LIST OF ARTISTS FOR “MICKEY: THE TRUE ORIGINAL EXHIBITION” IN NEW YORK CITY",
    "subheadline": "We can’t wait to see this amazing art!",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/Featured-Thumbnail-Shinique-Smith-Mickey-True-Original-Exhibition-242x141.webp",
    "url": "https://ohmy.disney.com/news/2018/10/10/mickey-true-original-exhibition-artists/"
    },
    {
    "headline": "FREEFORM IS GETTING US HYPED FOR THE HOLIDAYS EARLIER THAN EVER WITH THEIR KICKOFF TO CHRISTMAS SCHEDULE",
    "subheadline": "Check out all the movies you can’t miss!",
    "image": "https://ohmy.disney.com/wp-content/uploads/2014/11/The-Santa-Clause-242x141.webp",
    "url": "https://ohmy.disney.com/news/2018/10/10/freeform-kickoff-to-christmas-schedule/"
    },
    {
    "headline": "WHICH DISNEY VILLAIN SHOULD BE YOUR BEST FRIEND?",
    "subheadline": "Bad friends forever!",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_VillianBFF.jpg",
    "url": "https://ohmy.disney.com/quiz/2018/10/10/which-disney-villain-should-be-your-best-friend/"
    },
    {
    "headline": "KENNY ORTEGA REVEALED THAT LEONARDO DICAPRIO MET WITH HIM FOR THE ROLE OF MAX IN HOCUS POCUS",
    "subheadline": "Watch our interview for even more on the magic behind Hocus Pocus.",
    "image": "https://ohmy.disney.com/wp-content/uploads/2014/10/Hocus-Pocus-Graveyard-242x141.webp",
    "url": "https://ohmy.disney.com/news/2018/10/09/watch-hocus-pocus-with-kenny-ortega/"
    },
    {
    "headline": "CAPTION THIS PHOTO AND WE’LL TELL YOU WHICH DISNEY PRINCESS SONG SHOULD BE YOUR THEME SONG TODAY",
    "subheadline": "Today, your life is a Disney Princess movie!",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_PrincessThemeSong.jpg",
    "url": "https://ohmy.disney.com/quiz/2018/10/08/caption-photo-disney-princess-song/"
    },
    {
    "headline": "RALPH BREAKS THE INTERNET DIRECTORS ANNOUNCE CASTING OF REAL-LIFE INTERNET STARS AT NEW YORK COMIC CON",
    "subheadline": "This is utter casting perfection.",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/colleen-in-ralph-breaks-the-internet-242x141.webp",
    "url": "https://ohmy.disney.com/news/2018/10/05/ralph-breaks-the-internet-casts-real-internet-stars/"
    },
    {
    "headline": "ALL THE FOOD WE ATE AT THE EPCOT INTERNATIONAL FOOD & WINE FESTIVAL",
    "subheadline": "So many tasty bites, so little time!",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_EpcotFoodAndWineFestival.jpg",
    "url": "https://ohmy.disney.com/food/2018/10/05/epcot-international-food-wine-festival/"
    },
    {
    "headline": "The Nutcracker and The Four Realms’ Mackenzie Foy Surprised Annual Passholders at the Disneyland Resort and We Can’t Wait For This Movie",
    "subheadline": "We love a fellow Disney fan.",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/mackenize-foy-nutcracker-disneyland-preview-242x141.webp",
    "url": "https://ohmy.disney.com/news/2018/10/05/mackenzie-foy-disneyland/"
    },
    {
    "headline": "WHICH ‘90S DISNEY MOVIE IS BASICALLY YOUR LIFE STORY?",
    "subheadline": "If only life were actually a ‘90s Disney movie.",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_90sMovieLifeStory.jpg",
    "url": "https://ohmy.disney.com/quiz/2018/10/05/quiz-90s-disney-movie-life-story/"
    },
    {
    "headline": "SNOW WHITE FANS WILL ENJOY REFLECTING ON THIS EXCERPT FROM MIRROR, MIRROR: A TWISTED TALE",
    "subheadline": "Who’s truly the fairest of them all?",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/09/Mirror-Mirror-header-242x141.webp",
    "url": "https://ohmy.disney.com/news/2018/10/04/mirror-mirror-twisted-tale-excerpt-cover/"
    },
    {
    "headline": "YOUR ZODIAC SIGN CAN TELL US YOUR TOP 3 FAVORITE DISNEY MOVIES",
    "subheadline": "From Aries to Pisces to everything in between.",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_ZodiacSignFaveMovie-1.jpg",
    "url": "https://ohmy.disney.com/quiz/2018/10/04/quiz-zodiac-favorite-disney-movies/"
    },
    {
    "headline": "CAN YOU MATCH THE FOOD TO THE DISNEY MOVIE?",
    "subheadline": "Craving a good quiz?",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/V2ET_OhMyDisney_MatchFoodWithMovie.jpg",
    "url": "https://ohmy.disney.com/quiz/2018/10/02/quiz-match-food-to-disney-movie/"
    },
    {
    "headline": "5 INSPIRING WALT DISNEY QUOTES",
    "subheadline": "Here are some wise words from Walt!",
    "image": "https://ohmy.disney.com/wp-content/uploads/2018/10/thumb2-Walt-Disney-in-his-office-242x141.webp",
    "url": "https://ohmy.disney.com/quotes/2018/10/01/inspiring-walt-disney-quotes/"
    }
]

function RecentPosts(){
  return (
    <div>
      {masterRecentPostsList.map((recentPost, index) =>
      <RecentPost url={recentPost.url}
      image={recentPost.image}
      headline={recentPost.headline}
      subheadline={recentPost.subheadline}
      key={index}/>
      )}
    </div>
  );
}

export default RecentPosts;