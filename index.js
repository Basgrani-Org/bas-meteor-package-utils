/* jshint -W020 */
if(typeof BasMTR === "undefined"){BasMTR = {};}
/* jshint +W020 */
exports.BasMTR = BasMTR;

var _is_init = BasMTR.utils_isInit;

if(!_is_init){ require('./lib'); }

// Is Server
if(Meteor.isServer){
    if(!_is_init){ require('./server'); }
}

// Is Client
if(Meteor.isClient){
    if(!_is_init){ require('./client'); }
}

BasMTR.utils_isInit = true;
