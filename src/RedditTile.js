import React, { Component } from 'react';

/*

  Full image as the tile, no margins, no padding, no titles
  just image to link
  If no media then large bold title or placeholder

*/

class RedditTile extends Component {

  render(){

    const tileItem = {

      listStyle: 'none'

    };

    const anchorStyle = {

      textDecoration: 'none'

    };

    return(
      <li style={tileItem}>
        <a style={anchorStyle} href={this.props.link}>
        {((this.props.media) ? <img src={this.props.media} alt="Reddit Post" height={this.props.height} width={this.props.width}/> : ((this.props.placeholder) ? <img src={this.props.placeholder} alt="Reddit Post" height="100px" width="150px"/> : <h3>{this.props.title}</h3>))  }
        </a>
      </li>
    );
  }
}

export default RedditTile;
