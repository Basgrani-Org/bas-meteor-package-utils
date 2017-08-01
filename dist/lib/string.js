'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var String_ = function (mtr) {

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

    var String_ = function () {
        function String_() {
            _classCallCheck(this, String_);
        }

        // Getters
        // ------------------------------------------------------------------------

        _createClass(String_, null, [{
            key: 'guid',


            // Public
            // ------------------------------------------------------------------------


            // Static
            // ------------------------------------------------------------------------

            // Guid
            value: function guid() {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                }

                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            }

            // Basename

        }, {
            key: 'basename',
            value: function basename(path, suffix) {
                var b = path;
                var lastChar = b.charAt(b.length - 1);

                if (lastChar === '/' || lastChar === '\\') {
                    b = b.slice(0, -1);
                }

                b = b.replace(/^.*[\/\\]/g, '');

                if (typeof suffix === 'string' && b.substr(b.length - suffix.length) === suffix) {
                    b = b.substr(0, b.length - suffix.length);
                }

                return b;
            }

            // Slug

        }, {
            key: 'slug',
            value: function slug(str) {
                str = str.replace(/^\s+|\s+$/g, ''); // trim
                str = str.toLowerCase();

                // remove accents, swap ñ for n, etc
                var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
                var to = "aaaaaeeeeeiiiiooooouuuunc------";
                for (var i = 0, l = from.length; i < l; i++) {
                    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
                }

                str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                .replace(/\s+/g, '-') // collapse whitespace and replace by -
                .replace(/-+/g, '-'); // collapse dashes

                return str;
            }

            // Is string

        }, {
            key: 'isString',
            value: function isString(string) {
                return typeof string === 'string' || string instanceof String;
            }

            // Capitalize first letter

        }, {
            key: 'capFirstLetter',
            value: function capFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            // Repeat

        }, {
            key: 'repeat',
            value: function repeat(string, times) {
                return new Array(times + 1).join(string);
            }

            // Get Default

        }, {
            key: 'getDefault',
            value: function getDefault(string, default_val) {
                if (string) {
                    return string;
                } else {
                    return default_val !== undefined ? default_val : '';
                }
            }

            // Static Private
            // ------------------------------------------------------------------------


        }, {
            key: 'VERSION',
            get: function get() {
                return VERSION;
            }
        }]);

        return String_;
    }();

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------


    // ------------------------------------------------------------------------
    // Meteor
    // ------------------------------------------------------------------------

    // Meteor startup


    mtr.startup(function () {
        //...
    });

    return String_;
}(Meteor);

BasMTR.String = String_;
exports.default = String_;
