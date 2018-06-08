import React, { Component } from 'react';

/*

  Gallery Post
  Title on bottom as caption
  Image shown with gaps between

*/

class RedditPostIt extends Component {

  render(){

    const galleryItem = {
      width: '25%',
      margin: '10px'
    }

    const galleryTitle = {
      fontSize: '1em',
      textOverflow: 'ellipsis'
    };

    const anchorStyle = {
      textDecoration: 'none'
    };

    const galleryPreview = {};

    return(
        <li style={galleryItem}>
          <a style={anchorStyle} href={this.props.link}>
          <h3 style={galleryTitle}> {this.props.title}</h3>
          { this.props.media ? <img stlye={galleryPreview} src={this.props.media} alt="Reddit Post" height={this.props.height} width={this.props.width}/> :  <img tlye={galleryPreview} src={this.props.placeholder} alt="Reddit Post"  height={this.props.height} width={this.props.width}/>  }
          </a>
        </li>
    );
  }
}

export default RedditPostIt;
