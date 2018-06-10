import React from 'react';

/*
  Gallery Post
  Title on bottom as caption
  Image shown with gaps between
*/

export default function RedditPostIt(props) {
  const galleryItem = {
    width: '25%',
    margin: '10px'
  };

  const galleryTitle = {
    fontSize: '1em',
    textOverflow: 'ellipsis'
  };

  const anchorStyle = {
    textDecoration: 'none'
  };

  const galleryPreview = {};

  return (
    <li style={galleryItem}>
      <a style={anchorStyle} href={props.link}>
        <h3 style={galleryTitle}>{props.title}</h3>
        <img
          style={galleryPreview}
          src={props.media}
          alt="Reddit Post"
          height={props.height}
          width={props.width}
        />
      </a>
    </li>
  );
}
