'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RedditPostIt = require('./RedditPostIt');

var _RedditPostIt2 = _interopRequireDefault(_RedditPostIt);

var _RedditListing = require('./RedditListing');

var _RedditListing2 = _interopRequireDefault(_RedditListing);

var _RedditTile = require('./RedditTile');

var _RedditTile2 = _interopRequireDefault(_RedditTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var redditAPI = 'https://www.reddit.com/r/';

var RedditPosts = function (_Component) {
  _inherits(RedditPosts, _Component);

  function RedditPosts(props) {
    _classCallCheck(this, RedditPosts);

    var _this = _possibleConstructorReturn(this, (RedditPosts.__proto__ || Object.getPrototypeOf(RedditPosts)).call(this, props));

    _this.componentChose = function (display) {
      var flexContainerGallery = {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        listStyle: 'none'
      };

      var flexContainerList = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexFlow: 'wrap',
        justifyContent: 'center'
      };

      var gridContainerTile = {
        width: '100%',
        display: 'grid',
        gridColumnGap: '0px',
        gridTemplateColumns: 'auto auto auto auto',
        justifyContent: 'center'
      };

      switch (display) {
        case 'tile':
          return _react2.default.createElement(
            'ul',
            { style: gridContainerTile },
            _this.state.redditPosts.map(function (post) {
              return _react2.default.createElement(_RedditTile2.default, {
                key: post.key,
                link: post.link,
                media: post.media,
                title: post.title,
                placeholder: _this.props.placeholder,
                height: _this.props.height,
                width: _this.props.width
              });
            })
          );
        case 'gallery':
          return _react2.default.createElement(
            'ul',
            { style: flexContainerGallery },
            _this.state.redditPosts.map(function (post) {
              return _react2.default.createElement(_RedditPostIt2.default, {
                key: post.key,
                link: post.link,
                media: post.media,
                title: post.title,
                placeholder: _this.props.placeholder,
                height: _this.props.height,
                width: _this.props.width
              });
            })
          );
        case 'listing':
          return _react2.default.createElement(
            'ul',
            { style: flexContainerList },
            _this.state.redditPosts.map(function (post) {
              return _react2.default.createElement(_RedditListing2.default, {
                key: post.key,
                link: post.link,
                media: post.media,
                title: post.title,
                placeholder: _this.props.placeholder,
                height: _this.props.height,
                width: _this.props.width
              });
            })
          );
        default:
          return _react2.default.createElement(
            'ul',
            { style: flexContainerList },
            _this.state.redditPosts.map(function (post) {
              return _react2.default.createElement(_RedditListing2.default, {
                key: post.key,
                link: post.link,
                media: post.media,
                title: post.title,
                placeholder: _this.props.placeholder,
                height: _this.props.height,
                width: _this.props.width
              });
            })
          );
      }
    };

    _this.state = {
      redditPosts: []
    };

    _this.componentChose = _this.componentChose.bind();
    _this.mediaComprehension = _this.mediaComprehension.bind();

    return _this;
  }

  //rework later to better produce the media links for previews and other times of links like gifv


  _createClass(RedditPosts, [{
    key: 'mediaComprehension',
    value: function mediaComprehension(post) {
      var mediaSource = null; //.preview.images[0].source.url;
      if (post.data.hasOwnProperty('preiew') && post.data.url.split('.').pop() !== 'gifv' && !(post.data.url.split('.').pop() !== 'gif')) {
        mediaSource = post.data.preview.preview.images[0].source.url;
      } else if (post.data.url.split('.').pop() === 'gif') {
        mediaSource = post.data.url;
      } else if (post.data.url.split('.').pop() === 'gifv') {
        //turn into imgur video link set up so it display video
        mediaSource = null;
      } else if (post.data.url.split('.').pop() === 'jpg' || post.data.url.split('.').pop() === 'jpeg') {
        mediaSource = post.data.url;
      }
      return mediaSource;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var uri = redditAPI + this.props.subreddit + ".json";
      if (uri) {
        fetch(uri).then(function (data) {
          return data.json();
        }).then(function (posts) {
          var apiPosts = [];
          posts.data.children.forEach(function (post, index) {

            var postData = {
              key: index,
              title: post.data.title,
              media: _this2.mediaComprehension(post),
              link: post.data.url
            };
            apiPosts.push(postData);
          });

          _this2.setState({ redditPosts: apiPosts });
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }

    //encapsulate <ul> and classes as each componenet and each componenet as a subclass of  a Component class or interface?

  }, {
    key: 'render',
    value: function render() {
      return this.componentChose(this.props.display);
    }
  }]);

  return RedditPosts;
}(_react.Component);

//export default RedditPosts;


exports.default = RedditPosts;