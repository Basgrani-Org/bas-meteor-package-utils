_ = require('underscore');

// Client
(function (mtr) {
    // Define start point
    if(!BasMTR.client){ BasMTR.client = {}; }
    var _this = function(){return BasMTR.client;}();

    /* --------------------------------------- */
    /* Set backend server
    /* --------------------------------------- */
    _this.set_backend_server = function() {
        // Connect to external server (BACKEND_URL)
        if (!BasMTR.CEXS){ BasMTR.CEXS = {}; }
        if (__meteor_runtime_config__.BACKEND_URL) {
            BasMTR.CEXS.originalConnection = mtr.connection;
            BasMTR.CEXS.backendConnection = Accounts.connection;
            mtr.connection = BasMTR.CEXS.backendConnection;
            _.each(['subscribe', 'methods', 'call', 'apply', 'status', 'reconnect', 'disconnect'], function(name) {
                mtr[name] = _.bind(mtr.connection[name], mtr.connection);
            });
        }
    };

    // Init only one once
    _this.init = function() {
        //...
    };

    // Meteor startup
    mtr.startup(function () {
        // ...
    });

    // Init
    if(!_this.is_init){_this.init();_this.is_init = true;}

}( Meteor ));
