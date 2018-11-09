import React from 'react';

function Nav(){
  return (
    <div>
      <div>
        <div>
          <input type="text" name="search" placeholder="SEARCH"></input>
        </div>
        <div>
          <a href="https://ohmy.disney.com/"><img src="https://pbs.twimg.com/profile_images/1016850117704290304/YbnWtN96_400x400.jpg"></img></a>
        </div>
        <div>
          <div>
            <a href="https://www.facebook.com/OhMyDisney"><img src="https://mbtskoudsalg.com/images/facebook-icon-png-white-3.png"></img></a>
          </div>
          <div>
            <a href="https://www.instagram.com/ohmydisney/"><img src="https://mbtskoudsalg.com/images/instagram-png-white-3.png"></img></a>
          </div>
          <div>
            <a href="https://www.youtube.com/user/OhMyDisney"><img src="https://mbtskoudsalg.com/images/youtube-play-button-white-png-4.png"></img></a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <ul>
            <li><a href="https://ohmy.disney.com/quiz/">QUIZ</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="https://ohmy.disney.com/quotes/">QUOTES</a></li>
            <li><a href="https://ohmy.disney.com/movies/">MOVIES</a></li>
            <li><a href="https://ohmy.disney.com/food/">FOOD</a></li>
            <li><a href="https://ohmy.disney.com/parks/">PARKS</a></li>
            <li><a href="https://ohmy.disney.com/tv/">TV</a></li>
            <li><a href="https://ohmy.disney.com/music/">MUSIC</a></li>
            <li><a href="https://video.disney.com/oh-my-disney">VIDEO</a></li>
            <li><a href="https://ohmy.disney.com/shop/">SHOP</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;