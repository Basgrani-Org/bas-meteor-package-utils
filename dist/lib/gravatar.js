'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _md = require('crypto-js/md5');

var _md2 = _interopRequireDefault(_md);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gravatar_ = function (mtr) {
  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  var VERSION = BasMTR.Utils.VERSION;

  // ------------------------------------------------------------------------
  // Vars
  // ------------------------------------------------------------------------


  // ------------------------------------------------------------------------
  // Class Definition
  // ------------------------------------------------------------------------

  var Gravatar_ = function () {
    function Gravatar_() {
      _classCallCheck(this, Gravatar_);
    }

    _createClass(Gravatar_, null, [{
      key: 'imageUrl',


      // Public
      // ------------------------------------------------------------------------


      // Static
      // ------------------------------------------------------------------------

      // Image url
      value: function imageUrl(emailOrHash, options) {
        options = options || {};

        // Want HTTPS ?
        var url = options.secure ? 'https://secure.gravatar.com/avatar/' : 'http://www.gravatar.com/avatar/';
        delete options.secure;

        // Is it an MD5 already ?
        url += Gravatar_._isHash(emailOrHash) ? emailOrHash : Gravatar_._hash(emailOrHash);

        // Have any options to pass ?
        var params = _underscore2.default.map(options, function (val, key) {
          return key + '=' + encodeURI(val);
        }).join('&');

        return params.length > 0 ? url + '?' + params : url;
      }

      // Static Private
      // ------------------------------------------------------------------------

      // Clear string

    }, {
      key: '_cleanString',
      value: function _cleanString(string) {
        return string.trim().toLowerCase();
      }

      // Is hash

    }, {
      key: '_isHash',
      value: function _isHash(string) {
        return (/^[a-f0-9]{32}$/i.test(Gravatar_._cleanString(string))
        );
      }

      // Hash

    }, {
      key: '_hash',
      value: function _hash(string) {
        return (0, _md2.default)(Gravatar_._cleanString(string), 'hex').toString();
      }
    }, {
      key: 'VERSION',

      /* constructor() {
       } */

      // Getters
      // ------------------------------------------------------------------------

      get: function get() {
        return VERSION;
      }
    }]);

    return Gravatar_;
  }();

  // ------------------------------------------------------------------------
  // Init
  // ------------------------------------------------------------------------


  // ------------------------------------------------------------------------
  // Meteor
  // ------------------------------------------------------------------------

  // Meteor startup


  mtr.startup(function () {
    // ...
  });

  return Gravatar_;
}(Meteor);

BasMTR.Gravatar = Gravatar_;
exports.default = Gravatar_;
