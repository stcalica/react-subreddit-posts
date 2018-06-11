import React from 'react';

/*
  Image next to title which is all a link
  one after the other
*/
export default function RedditListing(props) {
  const listItem = {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
    listStyle: 'none'
  };

  const anchorStyle = {
    display: 'flex',
    textDecoration: 'none'
  };

  const listPreview = {
    margin: '10px'
  };

  const titleListItem = {
    margin: '10px'
  };

  return (
    <li style={listItem}>
      <a style={anchorStyle} href={props.link}>
        <img
          style={listPreview}
          src={props.media}
          alt="Reddit Post"
          height={props.height}
          width={props.width}
        />
        <h3 style={titleListItem}>{props.title}</h3>
      </a>
    </li>
  );
}
