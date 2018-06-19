import React from 'react';
import SubredditPosts from '../src/index';
import { shallow } from 'enzyme';
import componentDidMount from '../src/index';

describe('Subreddit Component Works', () => {

  test('That Subreddit Posts Loads', () => {
    const wrapper = shallow(
      <SubredditPosts
        subreddit="aww"
        display="gallery" //list, gallery, tile
        placeholder="http://www.codeisdead.com/img/profile/Kyle.jpg" // image if no image or preview or media
        width="250px" //of each tile or gallery post
        height="300px" //of each tile or gallery post
        //listings are always full page
      />);

  });

});
