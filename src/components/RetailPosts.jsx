import React from "react";
import RetailPost from './RetailPost';

const masterRetailPostsList = [
  {
    headline: "OUR WISH IS TO WEAR THIS MAGIC CARPET DENIM JACKET EVERY SINGLE DAY",
    shop: "DISNEY CLOTHES",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/10/C_OhMyDisney_AladdinJacket_02.jpg",
    cost: 1, 
    url: "https://ohmy.disney.com/shop/disney-clothes/oh-my-disney-collection-magic-carpet-denim-jacket-aladdin/"
  },
  {
    headline: "THIS TOY STORY ALIEN ONESIE WILL MAKE YOU THE COZIEST PERSON THIS HALLOWEEN",
    shop: "DISNEY CLOTHES",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/10/C_OhMyDisney_AlienOnesie_01.jpg",
    cost: 1,
    url: "https://ohmy.disney.com/shop/disney-clothes/shop-toy-story-alien-onesie/"
  },
  {
    headline: "CELEBRATE MICKEY MOUSE’S UPCOMING ANNIVERSARY WITH THIS AMAZING HISTORY BOOK",
    shop: "DISNEY BOOKS",
    image: "https://ohmy.disney.com/wp-content/uploads/2018/10/C_OhMyDisney_MickeyMouseTaschenBook_01.jpg",
    cost: 2, 
    url: "https://ohmy.disney.com/shop/disney-book/shop-taschen-walt-disneys-mickey-mouse-ultimate-history/"
  }
]

function RetailPosts(){
  return (
    <div>
      {masterRetailPostsList.map((retailPost, index) =>
      <RetailPost headline={retailPost.headline}
      shop={retailPost.shop}
      image={retailPost.image}
      cost={retailPost.cost}
      url={retailPost.url}
      key={index}/>
      )}
    </div>
  );
}

export default RetailPosts;