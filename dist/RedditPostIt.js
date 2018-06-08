'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*

  Gallery Post
  Title on bottom as caption
  Image shown with gaps between

*/

var RedditPostIt = function (_Component) {
  _inherits(RedditPostIt, _Component);

  function RedditPostIt() {
    _classCallCheck(this, RedditPostIt);

    return _possibleConstructorReturn(this, (RedditPostIt.__proto__ || Object.getPrototypeOf(RedditPostIt)).apply(this, arguments));
  }

  _createClass(RedditPostIt, [{
    key: 'render',
    value: function render() {

      var galleryItem = {
        width: '25%',
        margin: '10px'
      };

      var galleryTitle = {
        fontSize: '1em',
        textOverflow: 'ellipsis'
      };

      var anchorStyle = {
        textDecoration: 'none'
      };

      var galleryPreview = {};

      return _react2.default.createElement(
        'li',
        { style: galleryItem },
        _react2.default.createElement(
          'a',
          { style: anchorStyle, href: this.props.link },
          _react2.default.createElement(
            'h3',
            { style: galleryTitle },
            ' ',
            this.props.title
          ),
          this.props.media ? _react2.default.createElement('img', { stlye: galleryPreview, src: this.props.media, alt: 'Reddit Post', height: this.props.height, width: this.props.width }) : _react2.default.createElement('img', { tlye: galleryPreview, src: this.props.placeholder, alt: 'Reddit Post', height: this.props.height, width: this.props.width })
        )
      );
    }
  }]);

  return RedditPostIt;
}(_react.Component);

exports.default = RedditPostIt;