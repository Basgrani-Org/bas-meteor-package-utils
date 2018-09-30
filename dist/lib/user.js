'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gravatar = require('../lib/gravatar');

var _gravatar2 = _interopRequireDefault(_gravatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User_ = function (mtr) {
  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  var VERSION = BasMTR.Utils.VERSION;

  // ------------------------------------------------------------------------
  // Vars
  // ------------------------------------------------------------------------

  var _defaultLanguage = 'en';

  var _defaultSrcAvatar = '';

  // ------------------------------------------------------------------------
  // Class Definition
  // ------------------------------------------------------------------------

  var User_ = function () {
    function User_() {
      _classCallCheck(this, User_);
    }

    _createClass(User_, null, [{
      key: 'getUser',


      // Public
      // ------------------------------------------------------------------------


      // Static
      // ------------------------------------------------------------------------

      // Get user
      value: function getUser(id) {
        return id ? mtr.users.findOne({ _id: id }) : mtr.users.findOne({ _id: User_.getCurrentId() });
      }

      // Get current ID

    }, {
      key: 'getCurrentId',
      value: function getCurrentId() {
        return mtr.userId();
      }

      // Get roles

    }, {
      key: 'getRoles',
      value: function getRoles(id) {
        var user = User_.getUser(id);

        return user.roles || '';
      }

      // Get label

    }, {
      key: 'getLabel',
      value: function getLabel(id, isEmail) {
        var user = User_.getUser(id);
        if (!user) {
          return 'none';
        }

        var label = '';

        if (user.profile && user.profile.firstName) {
          label = user.profile.firstName;
        } else if (user.username) {
          label = user.username;
        } else if (User_.getEmail(id) !== '' && isEmail) {
          label = User_.getEmail(id);
        }

        return label;
      }

      // Get email

    }, {
      key: 'getEmail',
      value: function getEmail(id) {
        var user = User_.getUser(id);

        var email = '';

        if (user && user.registered_emails && user.registered_emails.length) {
          email = user.registered_emails[0].address;
        } else if (user && user.emails && user.emails.length) {
          email = user.emails[0].address;
        }

        return email;
      }

      // Get avatar

    }, {
      key: 'getAvatar',
      value: function getAvatar(id) {
        var _avatar = User_.defaultSrcAvatar;
        var user = User_.getUser(id);

        if (user) {
          // Facebook
          if (user.profile && user.profile.facebookId) {
            _avatar = 'https://graph.facebook.com/' + user.profile.facebookId + '/picture?type=square&height=160&width=160';
          } else {
            // Gravatar
            _avatar = _gravatar2.default.imageUrl(User_.getEmail(id), { secure: true, d: 'mm' });
          }
        }

        return _avatar;
      }

      // Get language

    }, {
      key: 'getLanguage',
      value: function getLanguage(id) {
        var isDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var user = User_.getUser(id);

        if (user && user.profile && user.profile.language) {
          return user.profile.language;
        } else if (isDef) {
          return User_.defaultLanguage;
        }
        return null;
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
    }, {
      key: 'defaultLanguage',
      get: function get() {
        return _defaultLanguage;
      },
      set: function set(lang) {
        _defaultLanguage = lang;
      }
    }, {
      key: 'defaultSrcAvatar',
      get: function get() {
        return _defaultSrcAvatar;
      },
      set: function set(avatar) {
        _defaultSrcAvatar = avatar;
      }
    }]);

    return User_;
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

  return User_;
}(Meteor);

BasMTR.User = User_;
exports.default = User_;
