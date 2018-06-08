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

  Full image as the tile, no margins, no padding, no titles
  just image to link
  If no media then large bold title or placeholder

*/

var RedditTile = function (_Component) {
  _inherits(RedditTile, _Component);

  function RedditTile() {
    _classCallCheck(this, RedditTile);

    return _possibleConstructorReturn(this, (RedditTile.__proto__ || Object.getPrototypeOf(RedditTile)).apply(this, arguments));
  }

  _createClass(RedditTile, [{
    key: 'render',
    value: function render() {

      var tileItem = {

        listStyle: 'none'

      };

      var anchorStyle = {

        textDecoration: 'none'

      };

      return _react2.default.createElement(
        'li',
        { style: tileItem },
        _react2.default.createElement(
          'a',
          { style: anchorStyle, href: this.props.link },
          this.props.media ? _react2.default.createElement('img', { src: this.props.media, alt: 'Reddit Post', height: this.props.height, width: this.props.width }) : this.props.placeholder ? _react2.default.createElement('img', { src: this.props.placeholder, alt: 'Reddit Post', height: '100px', width: '150px' }) : _react2.default.createElement(
            'h3',
            null,
            this.props.title
          )
        )
      );
    }
  }]);

  return RedditTile;
}(_react.Component);

exports.default = RedditTile;