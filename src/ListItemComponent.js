import React from 'react';
import RedditPostIt from './RedditPostIt';
import RedditListing from './RedditListing';
import RedditTile from './RedditTile';

const ListItemComponent = ({ display, ...props }) => {
  switch (display) {
    case 'tile':
      return <RedditTile {...props} />;

    case 'gallery':
      return <RedditPostIt {...props} />;

    case 'listing':
      return <RedditListing {...props} />;

    default:
      return <RedditListing {...props} />;
  }
}

export default ListItemComponent;