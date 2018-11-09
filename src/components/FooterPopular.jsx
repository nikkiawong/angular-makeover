import React from "react";
import FooterPopularPost from './FooterPopularPost';

const masterFooterPopularList = [
  {
    headline: "Can You Guess the ‘90s Disney Movie from One Random Clue?",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/09/ET_OhMyDisney_Guess90sMovieFromOneClue.jpg",
    url: "https://ohmy.disney.com/quiz/2018/09/23/quiz-guess-90s-disney-movie-one-random-clue/"
  },
  {
    headline: "Only a True Disney Princess Fan Can Get 100% on This Quiz",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/09/I_OhMyDisney_TruePrincessFansOnly_Featured-242x141.jpg",
    url: "https://ohmy.disney.com/quiz/2018/09/22/true-disney-princess-fan-100-percent-quiz/"
  },
  {
    headline: "Can You Guess the Disney Character Based on the Sketch We Drew with Our Non-Dominant Hand?",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/09/ET_OhMyDisney_NonDominantHandQuiz.jpg",
    url: "https://ohmy.disney.com/quiz/2018/09/20/quiz-guess-character-sketch-non-dominant-hand/"
  },
  {
    headline: "Match the Dwelling to the Disney Pixar Character That Lives There",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/09/et_ohmydisney_matchdwellingtocharacter.jpg",
    url: "https://ohmy.disney.com/quiz/2018/09/17/quiz-match-dwelling-disney-pixar-character/"
  }
]

function FooterPopular(){
  return (
    <div>
      {masterFooterPopularList.map((footerPopularPost, index) =>
      <FooterPopularPost headline={footerPopularPost.headline}
      image={footerPopularPost.image}
      url={footerPopularPost.url}
      key={index}/>
      )}
    </div>
  );
}

export default FooterPopular;