import React, { Component } from 'react';
import ListContainer from './ListContainer';
import ListItemComponent from './ListItemComponent';

const redditAPI = 'https://www.reddit.com/r/';

export default class SubredditPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      redditPosts: []
    };
  }

  componentDidMount() {
    const uri = `${redditAPI}${this.props.subreddit}.json`;

    fetch(uri)
      .then(data => data.json())
      .then(this.handlePosts)
      .catch(err => console.error(err));
  }

  handlePosts = (posts) => {
    const apiPosts = posts.data.children.map((post, index) => ({
      key: index,
      title: post.data.title,
      media: this.getMediaFromPost(post),
      link: post.data.url
    }));

    this.setState({
      redditPosts: apiPosts,
      isLoading: false
    });
  }

  getMediaFromPost = (post) => {
    const extension = post.data.url.split('.').pop();
    if (post.data.hasOwnProperty('preiew') && extension === 'gif') {
      return post.data.preview.preview.images[0].source.url;
    }

    if (extension === 'gif' || extension === 'jpg' || extension === 'jpeg') {
      return post.data.url;
    }

    return this.props.placeholder;
  }

  render() {

    return (
      <ListContainer display={this.props.display}>
        {this.state.isLoading && <p>Loading...</p>}
        {!this.state.isLoading && this.state.redditPosts.map(post => (
          <ListItemComponent
            display={this.props.display}
            key={post.key}
            link={post.link}
            media={post.media}
            title={post.title}
            height={this.props.height}
            width={this.props.width}
          />
        ))}
      </ListContainer>
    );
  }
}
