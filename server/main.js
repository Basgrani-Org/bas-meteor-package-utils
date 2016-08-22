var colors = require('colors');
colors.enabled = true;

// Server
(function (mtr) {
    // Set start point
    if(!BasMTR.server){ BasMTR.server = {}; }
    var _this = function(){return BasMTR.server;}();

    _this.os = require('os');

    /* --------------------------------------- */
    /* Hostname
    /* --------------------------------------- */
    _this.hostname = function() {
        return _this.os.hostname();
    };

    /* --------------------------------------- */
    /* Addresses
    /* --------------------------------------- */
    _this.addresses = function() {
        var _i;
        var _len;
        var _ref;
        var interfaces = _this.os.networkInterfaces();
        var addresses = [];
        for (var k in interfaces) {
            if (interfaces.hasOwnProperty(k)) {
                _ref = interfaces[k];
                for (_i = 0, _len = _ref.length; _i < _len; _i = _i + 1) {
                    var address = _ref[_i];
                    if (address.family === 'IPv4' && !address.internal) {
                        addresses.push(address.address);
                    }
                }
            }
        }
        return addresses;
    };

    /* --------------------------------------- */
    /* Is Dev
    /* --------------------------------------- */
    _this.is_dev = function() {
        return process.env.NODE_ENV === 'development';
    };

    /* --------------------------------------- */
    /* Log start
    /* --------------------------------------- */
    _this.log_start = function() {
        if (_this.is_dev()) {
            var app = appName ? appName : 'Untitled Application';
            var HR = BasMTR.string.repeat('_', 45);
            var host = process.env.ROOT_URL;
            console.log('\n' + 'Server Started'.red);
            console.log(HR.blue);
            console.log(' Application : '.grey, app.green);
            console.log(' Host : '.grey, host.green);
            console.log(' Host Name : '.grey, _this.hostname().green);
            console.log(' Environment : '.grey, process.env.NODE_ENV.green);
            console.log(' IP Address : '.grey, _this.addresses()[0].green);
            return console.log(HR.green);
        }
    };

    /* --------------------------------------- */
    /* Set backend server
    /* --------------------------------------- */
    _this.set_backend_server = function(backendUrl) {
        var _backendUrl = backendUrl || process.env.BACKEND_URL;
        if (_backendUrl) {
            // Connect to external server (BACKEND_URL)
            __meteor_runtime_config__.BACKEND_URL = _backendUrl;
            __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL = _backendUrl;
        }
    };

    // Init only one once
    _this.init = function() {

        // Methods
        mtr.methods({
            'BasMTR:is_dev': function() {
                return _this.is_dev();
            }
        });
    };

    // Meteor startup
    mtr.startup(function () {
        // ...
    });

    // Init
    if(!_this.is_init){_this.init();_this.is_init = true;}

}( Meteor ));
