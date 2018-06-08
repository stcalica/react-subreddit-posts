import React, { Component } from 'react';
import RedditPostIt from './RedditPostIt';
import RedditListing from './RedditListing';
import RedditTile from './RedditTile';

const redditAPI = 'https://www.reddit.com/r/';

export default class RedditPosts extends Component {
  constructor(props){
  super(props);
  this.state = {
    redditPosts: []
  }

  this.componentChose = this.componentChose.bind();
  this.mediaComprehension = this.mediaComprehension.bind();

  }

  //rework later to better produce the media links for previews and other times of links like gifv
  mediaComprehension(post){
    let mediaSource = null; //.preview.images[0].source.url;
    if(post.data.hasOwnProperty('preiew') && (post.data.url.split('.').pop() !== 'gifv') && !(post.data.url.split('.').pop() !== 'gif')){
        mediaSource = post.data.preview.preview.images[0].source.url;
    } else if(post.data.url.split('.').pop() === 'gif'){
      mediaSource = post.data.url;
    } else if(post.data.url.split('.').pop() === 'gifv'){
      //turn into imgur video link set up so it display video
      mediaSource = null;
    } else if(post.data.url.split('.').pop() === 'jpg' || post.data.url.split('.').pop() === 'jpeg'){
        mediaSource = post.data.url;
    }
    return mediaSource;
  }

  componentDidMount(){
    let uri = redditAPI + this.props.subreddit + ".json";
    if(uri){ fetch(uri)
    .then(data => data.json())
    .then(posts => {
      let apiPosts = [];
      posts.data.children.forEach( (post, index) => {

        let postData = {
          key: index,
          title:post.data.title,
          media: this.mediaComprehension(post),
          link: post.data.url
        };
        apiPosts.push(postData);
      });

      this.setState({redditPosts : apiPosts});
    }).catch(err => console.log(err)) }
  }

  //encapsulate <ul> and classes as each componenet and each componenet as a subclass of  a Component class or interface?
  componentChose = (display) => {
    const flexContainerGallery = {
      display:'flex',
      width: '100%',
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      listStyle: 'none'
    };

    const flexContainerList = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexFlow: 'wrap',
      justifyContent: 'center'
    };

    const gridContainerTile = {
      width: '100%',
      display: 'grid',
      gridColumnGap: '0px',
      gridTemplateColumns: 'auto auto auto auto',
      justifyContent: 'center'
    };

    switch(display){
      case 'tile':
        return(
          <ul style={gridContainerTile}>
            { this.state.redditPosts.map(post => <RedditTile
              key={post.key}
              link={post.link}
              media={post.media}
              title={post.title}
              placeholder={this.props.placeholder}
              height={this.props.height}
              width={this.props.width}
              />)
            }
          </ul>
        );
        case 'gallery':
        return(
          <ul style={flexContainerGallery}>
            { this.state.redditPosts.map(post => <RedditPostIt
              key={post.key}
              link={post.link}
              media={post.media}
              title={post.title}
              placeholder={this.props.placeholder}
              height={this.props.height}
              width={this.props.width}
              />)
            }
          </ul>
        );
        case 'listing':
        return(
          <ul style={flexContainerList}>
            { this.state.redditPosts.map(post => <RedditListing
              key={post.key}
              link={post.link}
              media={post.media}
              title={post.title}
              placeholder={this.props.placeholder}
              height={this.props.height}
              width={this.props.width}
              />)
            }
          </ul>
        );
        default:
        return(
          <ul style={flexContainerList}>
            { this.state.redditPosts.map(post => <RedditListing
              key={post.key}
              link={post.link}
              media={post.media}
              title={post.title}
              placeholder={this.props.placeholder}
              height={this.props.height}
              width={this.props.width}
              />)
            }
          </ul>
        );
    }
  }

  render() {
    return(this.componentChose(this.props.display));
  }
}

//export default RedditPosts;
