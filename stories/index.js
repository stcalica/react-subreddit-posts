import React from 'react';
import { storiesOf } from '@storybook/react';
import SubredditPosts from '../src/index.js';

storiesOf('SubredditPosts', module)
  .add('with r/aww as gallery', () => (
    <SubredditPosts
      subreddit="aww"
      display="gallery" //list, gallery, tile
      placeholder="http://www.codeisdead.com/img/profile/Kyle.jpg" // image if no image or preview or media
      width="250px" //of each tile or gallery post
      height="300px" //of each tile or gallery post
      //listings are always full page
    />
  ))
  .add('with r/aww as tile', () => (
    <SubredditPosts
      subreddit="aww"
      display="tile" //list, gallery, tile
      placeholder="http://www.codeisdead.com/img/profile/Kyle.jpg" // image if no image or preview or media
      width="250px" //of each tile or gallery post
      height="300px" //of each tile or gallery post
      //listings are always full page
    />
  ))
  .add('with r/aww as list',() => (
    <SubredditPosts
      subreddit="aww"
      display="list" //list, gallery, tile
      placeholder="http://www.codeisdead.com/img/profile/Kyle.jpg" // image if no image or preview or media
      width="250px" //of each tile or gallery post
      height="300px" //of each tile or gallery post
      //listings are always full page
    />
  ));
