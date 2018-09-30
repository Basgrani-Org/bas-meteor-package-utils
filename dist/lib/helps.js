'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helps_ = function (mtr) {
  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  var VERSION = BasMTR.Utils.VERSION;

  // ------------------------------------------------------------------------
  // Vars
  // ------------------------------------------------------------------------

  var delayIds = [];

  // ------------------------------------------------------------------------
  // Class Definition
  // ------------------------------------------------------------------------

  var Helps_ = function () {
    function Helps_() {
      _classCallCheck(this, Helps_);
    }

    _createClass(Helps_, null, [{
      key: 'delay',


      // Public
      // ------------------------------------------------------------------------


      // Static
      // ------------------------------------------------------------------------

      // Delay
      value: function delay(callback, ms, args) {
        var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        clearTimeout(delayIds[id] ? delayIds[id] : 0);
        delayIds[id] = setTimeout(callback, ms, args);
        return delayIds[id];
      }

      // Get image Base 64

    }, {
      key: 'getImgBase64',
      value: function getImgBase64(src) {
        return src.indexOf('data:image') !== -1 ? src.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, '') : null;
      }

      // Add http

    }, {
      key: 'addHttp',
      value: function addHttp(url) {
        if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
          url = 'http://' + url;
        }
        return url;
      }

      // Valid url

    }, {
      key: 'validUrl',
      value: function validUrl(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return pattern.test(str);
      }

      // Get Default

    }, {
      key: 'getDefault',
      value: function getDefault(fn) {
        var default_val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        try {
          return fn() !== undefined ? fn() : default_val;
        } catch (err) {
          return default_val;
        }
      }

      // Static Private
      // ------------------------------------------------------------------------

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

    return Helps_;
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

  return Helps_;
}(Meteor);

BasMTR.Helps = Helps_;
exports.default = Helps_;
