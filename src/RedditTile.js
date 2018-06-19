import React from 'react';

/*
  Full image as the tile, no margins, no padding, no titles
  just image to link
  If no media then large bold title or placeholder
*/

export default function RedditTile(props) {
  const tileItem = {
    listStyle: 'none'
  };

  const anchorStyle = {
    textDecoration: 'none'
  };

  return (
    <li style={tileItem}>
      <a style={anchorStyle} href={props.link}>
        <img
          src={props.media}
          alt={props.title}
          height={props.height}
          width={props.width}
        />
      </a>
    </li>
  );
}
