'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-undef */


require('jquery');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client_ = function (mtr, $) {
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

  var Client_ = function () {
    function Client_() {
      _classCallCheck(this, Client_);
    }

    _createClass(Client_, null, [{
      key: 'popupWindow',


      // Public
      // ------------------------------------------------------------------------


      // Static
      // ------------------------------------------------------------------------

      // Popup window
      value: function popupWindow(url, opts) {
        var defaults = {
          center: 'screen', // true, screen || parent || undefined, null, "", false
          createNew: true,
          height: 500,
          left: 0,
          location: false,
          menubar: false,
          name: null,
          onUnload: null,
          resizable: false,
          scrollbars: false, // os x always adds scrollbars
          status: false,
          toolbar: false,
          top: 0,
          width: 500
        };

        var options = $.extend({}, defaults, opts);

        // center the window
        if (options.center === 'parent') {
          options.top = window.screenY + Math.round(($(window).height() - options.height) / 2);
          options.left = window.screenX + Math.round(($(window).width() - options.width) / 2);
        } else if (options.center === true || options.center === 'screen') {
          var screenLeft = typeof window.screenLeft !== 'undefined' ? window.screenLeft : screen.left;

          options.top = (screen.height - options.height) / 2 - 50;
          options.left = screenLeft + (screen.width - options.width) / 2;
        }

        // params
        var params = [];
        params.push('location=' + (options.location ? 'yes' : 'no'));
        params.push('menubar=' + (options.menubar ? 'yes' : 'no'));
        params.push('toolbar=' + (options.toolbar ? 'yes' : 'no'));
        params.push('scrollbars=' + (options.scrollbars ? 'yes' : 'no'));
        params.push('status=' + (options.status ? 'yes' : 'no'));
        params.push('resizable=' + (options.resizable ? 'yes' : 'no'));
        params.push('height=' + options.height);
        params.push('width=' + options.width);
        params.push('left=' + options.left);
        params.push('top=' + options.top);

        // open window
        var random = new Date().getTime();
        var name = options.name || (options.createNew ? 'popup_window_' + random : 'popup_window');
        var win = window.open(url, name, params.join(','));

        // unload handler
        if (options.onUnload && typeof options.onUnload === 'function') {
          var unloadInterval = setInterval(function () {
            if (!win || win.closed) {
              clearInterval(unloadInterval);
              options.onUnload();
            }
          }, 50);
        }

        // focus window
        if (win && win.focus) {
          win.focus();
        }

        // return handle to window
        return win;
      }

      // Set backend server

    }, {
      key: 'setBackendServer',
      value: function setBackendServer() {
        // Connect to external server (BACKEND_URL)
        if (!BasMTR.CEXS) {
          BasMTR.CEXS = {};
        }
        if (__meteor_runtime_config__.BACKEND_URL) {
          BasMTR.CEXS.originalConnection = mtr.connection;
          BasMTR.CEXS.backendConnection = Accounts.connection;
          mtr.connection = BasMTR.CEXS.backendConnection;
          _underscore2.default.each(['subscribe', 'methods', 'call', 'apply', 'status', 'reconnect', 'disconnect'], function (name) {
            mtr[name] = _underscore2.default.bind(mtr.connection[name], mtr.connection);
          });
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

    return Client_;
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

  // ------------------------------------------------------------------------
  // jQuery
  // ------------------------------------------------------------------------

  // Remove Classes by Prefix
  $.fn.remove_classes_by_prefix = function (prefix) {
    this.each(function (i, el) {
      var classes = el.className.split(' ').filter(function (c) {
        return c.lastIndexOf(prefix, 0) !== 0;
      });
      el.className = $.trim(classes.join(' '));
    });
    return this;
  };

  return Client_;
}(Meteor, jQuery);

BasMTR.Client = Client_;
exports.default = Client_;
