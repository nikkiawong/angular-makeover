import React from "react";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import YouTube from "./YouTube";

function Follow(){
  return (
    <div>
      <h3>Follow</h3>
      <ul>
        <li><Facebook/><a href="https://www.facebook.com/OhMyDisney"><span>Facebook</span></a></li>
        <li><Instagram/><a href="https://www.facebook.com/OhMyDisney"><span>Instagram</span></a></li>
        <li><YouTube/><a href="https://www.facebook.com/OhMyDisney"><span>YouTube</span></a></li>
      </ul>
    </div>
  );
}

export default Follow;