import React from 'react';
import RedditTile from './RedditTile';
import RedditListing from './RedditListing';
import RedditPostIt from './RedditPostIt';

const ListItemComponent = ({display, ...props}) => {
    switch(display){
      case 'tile':
        return <RedditTile {...props} />
      case 'gallery':
        return <RedditPostIt {...props} />
      case 'list':
        return <RedditListing {...props} />
      default:
        return <RedditListing {...props} />
    }
}

export default ListItemComponent;
