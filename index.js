/* jshint -W020 */
if(typeof BasMTR === "undefined"){BasMTR = {};}
/* jshint +W020 */
exports.BasMTR = BasMTR;

if(BasMTR.utils_isInit){return;}

require('./lib');

// Is Server
if(Meteor.isServer){
    require('./server');
}

// Is Client
if(Meteor.isClient){
    require('./client');
}

BasMTR.utils_isInit = true;
