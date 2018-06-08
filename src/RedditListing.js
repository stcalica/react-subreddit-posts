import React, { Component } from 'react';

/*

  Image next to title which is all a link
  one after the other

*/

class RedditListing extends Component {

  render(){

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

    const listTitle = {
        margin: '10px'

    };

    const titleListItem = {};

    return(
      <li style={listItem}>
      <a  style={anchorStyle} href={this.props.link}>
        { this.props.media ? <img style={listPreview} src={this.props.media} alt="Reddit Post" height={this.props.height} width={this.props.width}/> :  <img style={listPreview}  src={this.props.placeholder} alt="No Preview" height={this.props.height} width={this.props.width}/>  }
        <div style={listTitle}><h3 style={titleListItem}>{this.props.title}</h3></div>
        </a>
      </li>
    );
  }
}

export default RedditListing;
