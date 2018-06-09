import React, { Component } from "react";
import RedditPostIt from "./RedditPostIt";
import RedditListing from "./RedditListing";
import RedditTile from "./RedditTile";

const redditAPI = "https://www.reddit.com/r/";

export default class RedditPosts extends Component {
  constructor(props) {
    super(props);
    this.state = { redditPosts: [] };

    this.componentChose = this.componentChose.bind(this);
    this.mediaComprehension = this.getMediaFromPost.bind(this);
    this.handlePosts = this.handlePosts.bind(this);
  }

  componentDidMount() {
    const uri = `${redditAPI}${this.props.subreddit}.json`;

    fetch(uri)
      .then(data => data.json())
      .then(this.handlePosts)
      .catch(err => console.error(err));
  }

  render() {
    const { containerStyle, ListItemComponent } = this.componentChose(
      this.props.display
    );

    return (
      <ul style={containerStyle}>
        {this.state.redditPosts.map(post => (
          <ListItemComponent
            key={post.key}
            link={post.link}
            media={post.media}
            title={post.title}
            height={this.props.height}
            width={this.props.width}
          />
        ))}
      </ul>
    );
  }

  handlePosts(posts) {
    const apiPosts = posts.data.children.map((post, index) => {
      return {
        key: index,
        title: post.data.title,
        media: this.getMediaFromPost(post),
        link: post.data.url
      };
    });

    this.setState({ redditPosts: apiPosts });
  }

  getMediaFromPost(post) {
    const extension = post.data.url.split(".").pop();
    if (post.data.hasOwnProperty("preiew") && extension === "gif") {
      return post.data.preview.preview.images[0].source.url;
    }

    if (extension === "gif" || extension === "jpg" || extension === "jpeg") {
      return post.data.url;
    }

    return this.props.placeholder;
  }

  componentChose(display) {
    const flexContainerGallery = {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      listStyle: "none"
    };

    const flexContainerList = {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      flexFlow: "wrap",
      justifyContent: "center"
    };

    const gridContainerTile = {
      width: "100%",
      display: "grid",
      gridColumnGap: "0px",
      gridTemplateColumns: "auto auto auto auto",
      justifyContent: "center"
    };

    switch (display) {
      case "tile":
        return {
          containerStyle: gridContainerTile,
          ListItemComponent: RedditTile
        };

      case "gallery":
        return {
          containerStyle: flexContainerGallery,
          ListItemComponent: RedditPostIt
        };

      case "listing":
        return {
          containerStyle: flexContainerList,
          ListItemComponent: RedditListing
        };

      default:
        return {
          containerStyle: flexContainerList,
          ListItemComponent: RedditListing
        };
    }
  }
}
