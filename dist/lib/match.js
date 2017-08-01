'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Match_ = function (mtr) {

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

    var Match_ = function () {
        function Match_() {
            _classCallCheck(this, Match_);
        }

        // Getters
        // ------------------------------------------------------------------------

        _createClass(Match_, null, [{
            key: 'isPositiveInteger',


            // Public
            // ------------------------------------------------------------------------


            // Static
            // ------------------------------------------------------------------------

            // Is positive integer
            value: function isPositiveInteger(number) {
                var _positive = Match.Where(function (x) {
                    check(x, Match.Integer);
                    return x >= 0;
                });
                check(number, _positive);
            }

            // Get Default

        }, {
            key: 'getDefault',
            value: function getDefault(number, default_val) {
                if (_underscore2.default.isNumber(number)) {
                    return number;
                } else {
                    return default_val !== undefined ? default_val : 0;
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

        return Match_;
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

    return Match_;
}(Meteor);

BasMTR.Match = Match_;
exports.default = Match_;
