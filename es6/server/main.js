import string from '../lib/string';
import colors from 'colors';
colors.enabled = true;

const Server_ = ((mtr) => {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    const VERSION = BasMTR.Utils.VERSION;

    // ------------------------------------------------------------------------
    // Vars
    // ------------------------------------------------------------------------

    let _os = require('os');

    let _appName = 'Untitled Application';

    // ------------------------------------------------------------------------
    // Class Definition
    // ------------------------------------------------------------------------

    class Server_ {

        constructor() {

        }

        // Getters
        // ------------------------------------------------------------------------

        static get VERSION() {
            return VERSION;
        }

        static get appName() {
            return _appName;
        }

        static set appName(name) {
            _appName = name;
        }

        static get hostname() {
            return _os.hostname();
        }

        static get isDev() {
            return process.env.NODE_ENV === 'development';
        }

        static get addresses() {
            let _i;
            let _len;
            let _ref;
            let _interfaces = _os.networkInterfaces();
            let _addresses  = [];
            for (let k in _interfaces) {
                if (_interfaces.hasOwnProperty(k)) {
                    _ref = _interfaces[k];
                    for (_i = 0, _len = _ref.length; _i < _len; _i = _i + 1) {
                        let address = _ref[_i];
                        if (address.family === 'IPv4' && !address.internal) {
                            _addresses.push(address.address);
                        }
                    }
                }
            }
            return _addresses;
        }

        // Public
        // ------------------------------------------------------------------------


        // Static
        // ------------------------------------------------------------------------

        // Log start
        static logStart() {
            if (Server_.isDev) {
                let app  = Server_.appName;
                let HR   = string.repeat('_', 45);
                let host = process.env.ROOT_URL;
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
        static setBackendServer() {
            let _backendUrl = backendUrl || process.env.BACKEND_URL;
            if (_backendUrl) {
                // Connect to external server (BACKEND_URL)
                __meteor_runtime_config__.BACKEND_URL             = _backendUrl;
                __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL = _backendUrl;
            }
        }

        // Static Private
        // ------------------------------------------------------------------------


    }

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    // Methods
    mtr.methods({
        'BasMTR:isDev': function () {
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

})(Meteor);

BasMTR.Server = Server_;
export default Server_;
