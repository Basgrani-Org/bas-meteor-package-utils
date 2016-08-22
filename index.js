if(typeof global.BasMTR === "undefined"){global.BasMTR = {};}

require('./lib');

// Is Server
if(Meteor.isServer){
    require('./server');
}

// Is Client
if(Meteor.isClient){
    require('./client');
}
