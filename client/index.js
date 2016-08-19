// Connect to external server (BACKEND_URL)
if (!BasMTR.CES){ BasMTR.CES = {}; }
if (__meteor_runtime_config__.BACKEND_URL) {
    BasMTR.CES.originalConnection = Meteor.connection;
    BasMTR.CES.backendConnection = Accounts.connection;
    Meteor.connection = BasMTR.CES.backendConnection;
    _.each(['subscribe', 'methods', 'call', 'apply', 'status', 'reconnect', 'disconnect'], function(name) {
        Meteor[name] = _.bind(Meteor.connection[name], Meteor.connection);
    });
}

require('./template.js');
