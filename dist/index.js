'use strict';

require('./init');

require('./lib');

// Is Server.
// Import Init
if (Meteor.isServer) {
    require('./server');
}

// Is Client


// Import libs
if (Meteor.isClient) {
    require('./client');
}
