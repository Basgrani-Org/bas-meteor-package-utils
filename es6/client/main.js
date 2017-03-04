import 'jquery';
import _ from 'underscore';

const Client_ = ((mtr, $) => {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    const VERSION = BasMTR.Utils.VERSION;

    // ------------------------------------------------------------------------
    // Vars
    // ------------------------------------------------------------------------


    // ------------------------------------------------------------------------
    // Class Definition
    // ------------------------------------------------------------------------

    class Client_ {

        constructor() {

        }

        // Getters
        // ------------------------------------------------------------------------

        static get VERSION() {
            return VERSION;
        }

        // Public
        // ------------------------------------------------------------------------


        // Static
        // ------------------------------------------------------------------------

        // Popup window
        static popupWindow(url, opts) {
            let defaults = {
                center    : "screen", //true, screen || parent || undefined, null, "", false
                createNew : true,
                height    : 500,
                left      : 0,
                location  : false,
                menubar   : false,
                name      : null,
                onUnload  : null,
                resizable : false,
                scrollbars: false, // os x always adds scrollbars
                status    : false,
                toolbar   : false,
                top       : 0,
                width     : 500
            };

            let options = $.extend({}, defaults, opts);

            // center the window
            if (options.center === "parent") {
                options.top  = window.screenY + Math.round(($(window).height() - options.height) / 2);
                options.left = window.screenX + Math.round(($(window).width() - options.width) / 2);
            } else if (options.center === true || options.center === "screen") {
                let screenLeft = (typeof window.screenLeft !== 'undefined') ? window.screenLeft : screen.left;

                options.top  = ((screen.height - options.height) / 2) - 50;
                options.left = screenLeft + (screen.width - options.width) / 2;
            }

            // params
            let params = [];
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
            let random = new Date().getTime();
            let name   = options.name || (options.createNew ? 'popup_window_' + random : 'popup_window');
            let win    = window.open(url, name, params.join(','));

            // unload handler
            if (options.onUnload && typeof options.onUnload === 'function') {
                let unloadInterval = setInterval(function () {
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
        static setBackendServer() {
            // Connect to external server (BACKEND_URL)
            if (!BasMTR.CEXS) {
                BasMTR.CEXS = {};
            }
            if (__meteor_runtime_config__.BACKEND_URL) {
                BasMTR.CEXS.originalConnection = mtr.connection;
                BasMTR.CEXS.backendConnection  = Accounts.connection;
                mtr.connection                 = BasMTR.CEXS.backendConnection;
                _.each(['subscribe', 'methods', 'call', 'apply', 'status', 'reconnect', 'disconnect'], function (name) {
                    mtr[name] = _.bind(mtr.connection[name], mtr.connection);
                });
            }
        }

        // Static Private
        // ------------------------------------------------------------------------


    }

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

    // ------------------------------------------------------------------------
    // jQuery
    // ------------------------------------------------------------------------

    // Remove Classes by Prefix
    $.fn.remove_classes_by_prefix = function (prefix) {
        this.each(function (i, el) {
            let classes  = el.className.split(" ").filter(function (c) {
                return c.lastIndexOf(prefix, 0) !== 0;
            });
            el.className = $.trim(classes.join(" "));
        });
        return this;
    };

    return Client_;

})(Meteor, jQuery);

BasMTR.Client = Client_;
export default Client_;
