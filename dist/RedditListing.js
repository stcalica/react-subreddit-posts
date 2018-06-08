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

  Image next to title which is all a link
  one after the other

*/

var RedditListing = function (_Component) {
  _inherits(RedditListing, _Component);

  function RedditListing() {
    _classCallCheck(this, RedditListing);

    return _possibleConstructorReturn(this, (RedditListing.__proto__ || Object.getPrototypeOf(RedditListing)).apply(this, arguments));
  }

  _createClass(RedditListing, [{
    key: 'render',
    value: function render() {

      var listItem = {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        width: '100%',
        listStyle: 'none'

      };

      var anchorStyle = {
        display: 'flex',
        textDecoration: 'none'
      };

      var listPreview = {
        margin: '10px'

      };

      var listTitle = {
        margin: '10px'

      };

      var titleListItem = {};

      return _react2.default.createElement(
        'li',
        { style: listItem },
        _react2.default.createElement(
          'a',
          { style: anchorStyle, href: this.props.link },
          this.props.media ? _react2.default.createElement('img', { style: listPreview, src: this.props.media, alt: 'Reddit Post', height: this.props.height, width: this.props.width }) : _react2.default.createElement('img', { style: listPreview, src: this.props.placeholder, alt: 'No Preview', height: this.props.height, width: this.props.width }),
          _react2.default.createElement(
            'div',
            { style: listTitle },
            _react2.default.createElement(
              'h3',
              { style: titleListItem },
              this.props.title
            )
          )
        )
      );
    }
  }]);

  return RedditListing;
}(_react.Component);

exports.default = RedditListing;