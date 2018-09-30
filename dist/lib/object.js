'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Object_ = function (mtr) {
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

  var Object_ = function () {
    function Object_() {
      _classCallCheck(this, Object_);
    }

    _createClass(Object_, null, [{
      key: 'cloneObject',


      // Public
      // ------------------------------------------------------------------------


      // Static
      // ------------------------------------------------------------------------

      // Clone object
      value: function cloneObject(obj) {
        if (obj === null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
          return obj;
        }
        var temp = obj.constructor(); // give temp the original obj's constructor
        for (var key in obj) {
          if (obj.hasOwnProperty(key) && temp.hasOwnProperty(key)) {
            temp[key] = Object_.cloneObject(obj[key]);
          }
        }
        return temp;
      }

      // Compare object

    }, {
      key: 'compareObjects',
      value: function compareObjects(o1, o2) {
        for (var k in o1) {
          if (o1.hasOwnProperty(k) && o1[k] !== o2[k]) {
            return false;
          }
        }
        for (var _k in o2) {
          if (o2.hasOwnProperty(_k) && o1[_k] !== o2[_k]) {
            return false;
          }
        }
        return true;
      }

      // Item exists

    }, {
      key: 'itemExists',
      value: function itemExists(haystack, needle) {
        for (var i = 0; i < haystack.length; i += 1) {
          if (Object_.compareObjects(haystack[i], needle)) {
            return true;
          }
        }
        return false;
      }

      // Search objects

    }, {
      key: 'searchObjects',
      value: function searchObjects(query, objects) {
        var results = [];
        query = query.trim().toLowerCase();
        for (var i = 0; i < objects.length; i += 1) {
          for (var key in objects[i]) {
            if (objects[i].hasOwnProperty(key) && _string2.default.isString(objects[i][key])) {
              var obj = objects[i][key].toLowerCase();
              if (obj.indexOf(query) !== -1) {
                if (!Object_.itemExists(results, objects[i])) {
                  results.push(objects[i]);
                }
              }
            }
          }
        }
        return results;
      }

      // Get Default

    }, {
      key: 'getDefault',
      value: function getDefault(obj, key, default_val) {
        if (obj && _underscore2.default.has(obj, key)) {
          return obj[key];
        }

        return default_val !== undefined ? default_val : '';
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

    return Object_;
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

  return Object_;
}(Meteor);

BasMTR.Object = Object_;
exports.default = Object_;
