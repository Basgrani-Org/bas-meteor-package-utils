'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('jquery');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Template_ = function (mtr, $) {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    var VERSION = BasMTR.Utils.VERSION;

    // ------------------------------------------------------------------------
    // Vars
    // ------------------------------------------------------------------------

    var _isDev = void 0;

    // ------------------------------------------------------------------------
    // Class Definition
    // ------------------------------------------------------------------------

    var Template_ = function () {
        function Template_() {
            _classCallCheck(this, Template_);
        }

        // Getters
        // ------------------------------------------------------------------------

        _createClass(Template_, null, [{
            key: 'VERSION',
            get: function get() {
                return VERSION;
            }

            // Public
            // ------------------------------------------------------------------------


            // Static
            // ------------------------------------------------------------------------


            // Static Private
            // ------------------------------------------------------------------------


        }]);

        return Template_;
    }();

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    // Is Dev


    if (Template) {
        _isDev = new ReactiveVar(false);
        mtr.call('BasMTR:isDev', function (error, result) {
            _isDev.set(result);
        });
        Template.registerHelper('isDev', function () {
            return _isDev.get();
        });
    }

    // ifCond
    if (Template) {
        Template.registerHelper('ifCond', function (v1, operator, v2) {
            switch (operator) {
                case '===':
                    return v1 === v2;
                case '<':
                    return v1 < v2;
                case '<=':
                    return v1 <= v2;
                case '>':
                    return v1 > v2;
                case '>=':
                    return v1 >= v2;
                case '&&':
                    return v1 && v2;
                case '||':
                    return v1 || v2;
                default:
                    return null;
            }
        });
    }

    // ------------------------------------------------------------------------
    // Meteor
    // ------------------------------------------------------------------------

    // Meteor startup
    mtr.startup(function () {
        //...
    });

    // ------------------------------------------------------------------------
    // jQuery
    // ------------------------------------------------------------------------


    return Template_;
}(Meteor, jQuery);

BasMTR.Template = Template_;
exports.default = Template_;
