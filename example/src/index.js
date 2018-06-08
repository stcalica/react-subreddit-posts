import React from 'react';
import { render} from 'react-dom';
import RedditPosts from '../../src/RedditPosts';
const App = () => (
    <RedditPosts
      subreddit="aww"
      display="gallery"  //list, gallery, tile
      placeholder="http://www.codeisdead.com/img/profile/Kyle.jpg" // image if no image or preview or media
      width="250px" //of each tile or gallery post
      height="300px" //of each tile or gallery post
      //listings are always full page
      />
);
render(<App />, document.getElementById("root"));
