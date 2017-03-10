'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _string = require('../lib/string');

var _string2 = _interopRequireDefault(_string);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_colors2.default.enabled = true;

var Server_ = function (mtr) {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    var VERSION = BasMTR.Utils.VERSION;

    // ------------------------------------------------------------------------
    // Vars
    // ------------------------------------------------------------------------

    var _os = require('os');

    var _appName = 'Untitled Application';

    var _backendUrl = void 0;

    // ------------------------------------------------------------------------
    // Class Definition
    // ------------------------------------------------------------------------

    var Server_ = function () {
        function Server_() {
            _classCallCheck(this, Server_);
        }

        // Getters
        // ------------------------------------------------------------------------

        _createClass(Server_, null, [{
            key: 'logStart',


            // Public
            // ------------------------------------------------------------------------


            // Static
            // ------------------------------------------------------------------------

            // Log start
            value: function logStart() {
                if (Server_.isDev) {
                    var app = Server_.appName;
                    var HR = _string2.default.repeat('_', 45);
                    var host = process.env.ROOT_URL;
                    console.log('\n' + 'Server Started'.red);
                    console.log(HR.blue);
                    console.log(' Application : '.grey, app.green);
                    console.log(' Host : '.grey, host.green);
                    console.log(' Host Name : '.grey, Server_.hostname.green);
                    console.log(' Environment : '.grey, process.env.NODE_ENV.green);
                    console.log(' IP Address : '.grey, Server_.addresses[0].green);
                    return console.log(HR.green);
                }
            }

            // Set backend server

        }, {
            key: 'setBackendServer',
            value: function setBackendServer() {
                var _backendUrl = Server_._backendUrl || process.env.BACKEND_URL;
                if (_backendUrl) {
                    // Connect to external server (BACKEND_URL)
                    __meteor_runtime_config__.BACKEND_URL = _backendUrl;
                    __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL = _backendUrl;
                }
            }

            // Static Private
            // ------------------------------------------------------------------------


        }, {
            key: 'VERSION',
            get: function get() {
                return VERSION;
            }
        }, {
            key: 'appName',
            get: function get() {
                return _appName;
            },
            set: function set(name) {
                _appName = name;
            }
        }, {
            key: 'backendUrl',
            get: function get() {
                return _backendUrl;
            },
            set: function set(url) {
                _backendUrl = url;
            }
        }, {
            key: 'hostname',
            get: function get() {
                return _os.hostname();
            }
        }, {
            key: 'isDev',
            get: function get() {
                return process.env.NODE_ENV === 'development';
            }
        }, {
            key: 'addresses',
            get: function get() {
                var _i = void 0;
                var _len = void 0;
                var _ref = void 0;
                var _interfaces = _os.networkInterfaces();
                var _addresses = [];
                for (var k in _interfaces) {
                    if (_interfaces.hasOwnProperty(k)) {
                        _ref = _interfaces[k];
                        for (_i = 0, _len = _ref.length; _i < _len; _i = _i + 1) {
                            var address = _ref[_i];
                            if (address.family === 'IPv4' && !address.internal) {
                                _addresses.push(address.address);
                            }
                        }
                    }
                }
                return _addresses;
            }
        }]);

        return Server_;
    }();

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    // Methods


    mtr.methods({
        'BasMTR:isDev': function BasMTRIsDev() {
            return Server_.isDev;
        }
    });

    // ------------------------------------------------------------------------
    // Meteor
    // ------------------------------------------------------------------------

    // Meteor startup
    mtr.startup(function () {
        Server_.logStart();
    });

    return Server_;
}(Meteor);

BasMTR.Server = Server_;
exports.default = Server_;
