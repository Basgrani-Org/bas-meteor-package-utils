var md5 = require('crypto-md5');
var _   = require('underscore');

// Lib -> Gravatar
(function (mtr) {
    // Set start point
    if (!BasMTR.gravatar) {
        BasMTR.gravatar = {};
    }
    var _this = function () {
        return BasMTR.gravatar;
    }();

    /* --------------------------------------- */
    /* Clear string
    /* --------------------------------------- */
    _this.clean_string = function (string) {
        return string.trim().toLowerCase();
    };

    /* --------------------------------------- */
    /* Is hash
    /* --------------------------------------- */
    _this.is_hash = function (string) {
        return /^[a-f0-9]{32}$/i.test(_this.clean_string(string));
    };

    /* --------------------------------------- */
    /* Hash
    /* --------------------------------------- */
    _this.hash = function (string) {
        return md5(_this.clean_string(string), 'hex').toString();

    };

    /* --------------------------------------- */
    /* Image url
    /* --------------------------------------- */
    _this.image_url = function (emailOrHash, options) {
        options = options || {};

        // Want HTTPS ?
        var url = options.secure ? 'https://secure.gravatar.com/avatar/' : 'http://www.gravatar.com/avatar/';
        delete options.secure;

        // Is it an MD5 already ?
        url += _this.is_hash(emailOrHash) ? emailOrHash : _this.hash(emailOrHash);

        // Have any options to pass ?
        var params = _.map(options, function (val, key) {
            return key + '=' + encodeURI(val);
        }).join('&');

        return (params.length > 0) ? url + '?' + params : url;
    };

    // Init only one once
    _this.init = function () {
        //...
    };

    // Meteor startup
    mtr.startup(function () {
        // ...
    });

    // Init
    if (!_this.is_init) {
        _this.init();
        _this.is_init = true;
    }

}(Meteor));