# React Subreddit Posts

I wanted to a plug n play React component where I can just specify the subreddit and the way to display the posts.
I didn't want to also have a bunch of devDependencies on other NPM modules or React Components.


# Use
```
<RedditPosts
  subreddit=""
  display="gallery"  //list, gallery, tile
  placeholder="" // image if no image or preview or media
  width="" //of each tile or gallery post
  height="" //of each tile or gallery post
  //listings are always full page
  />
```

# Example
```
<RedditPosts
  subreddit="aww"
  display="tile"  
  placeholder="some_link_image_url_OR_image_path"
  width="250px"
  height="250px"
  />
```

# Thoughts, Questions, Updates?

If you think there is something I can improve on please let me know!
Life is a journey, I'd appreciate any feedback along my journey.

Also feel free to make a pull request or fork. I'll try to respond as soon as possible.
