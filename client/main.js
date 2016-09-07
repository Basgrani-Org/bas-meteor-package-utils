require('jquery');
var _ = require('underscore');

// Client
(function (mtr, $) {
    // Define start point
    if (!BasMTR.client) {
        BasMTR.client = {};
    }
    var _this = function () {
        return BasMTR.client;
    }();

    /* --------------------------------------- */
    /* isTouch
    /* --------------------------------------- */
    _this.is_touch = function () {
        return ('ontouchmove' in document.documentElement);
    };

    /* --------------------------------------- */
    /* Popup window
    /* --------------------------------------- */
    _this.popup_window = function (url, opts) {
        var defaults = {
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

        var options = $.extend({}, defaults, opts);

        // center the window
        if (options.center === "parent") {
            options.top  = window.screenY + Math.round(($(window).height() - options.height) / 2);
            options.left = window.screenX + Math.round(($(window).width() - options.width) / 2);
        } else if (options.center === true || options.center === "screen") {
            var screenLeft = (typeof window.screenLeft !== 'undefined') ? window.screenLeft : screen.left;

            options.top  = ((screen.height - options.height) / 2) - 50;
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
        var name   = options.name || (options.createNew ? 'popup_window_' + random : 'popup_window');
        var win    = window.open(url, name, params.join(','));

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
    };

    /* --------------------------------------- */
    /* Set backend server
    /* --------------------------------------- */
    _this.set_backend_server = function () {
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
    };

    // Init only one once
    _this.init = function () {
        //...
    };

    // Meteor startup
    mtr.startup(function () {
        if (_this.is_touch()) {
            $(document).ready(function () {
                $('html').addClass('touch-device');
            });
        }
    });

    // Init
    if (!_this.is_init) {
        _this.init();
        _this.is_init = true;
    }

}(Meteor, jQuery));
