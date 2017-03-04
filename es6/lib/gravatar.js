import md5 from 'crypto-js/md5';
import _ from 'underscore';

const Gravatar_ = ((mtr) => {

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

    class Gravatar_ {

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

        // Image url
        static imageUrl(emailOrHash, options) {
            options = options || {};

            // Want HTTPS ?
            let url = options.secure ? 'https://secure.gravatar.com/avatar/' : 'http://www.gravatar.com/avatar/';
            delete options.secure;

            // Is it an MD5 already ?
            url += Gravatar_._isHash(emailOrHash) ? emailOrHash : Gravatar_._hash(emailOrHash);

            // Have any options to pass ?
            let params = _.map(options, function (val, key) {
                return key + '=' + encodeURI(val);
            }).join('&');

            return (params.length > 0) ? url + '?' + params : url;
        }

        // Static Private
        // ------------------------------------------------------------------------

        // Clear string
        static _cleanString(string) {
            return string.trim().toLowerCase();
        }

        // Is hash
        static _isHash(string) {
            return /^[a-f0-9]{32}$/i.test(Gravatar_._cleanString(string));
        }

        // Hash
        static _hash(string) {
            return md5(Gravatar_._cleanString(string), 'hex').toString();
        }

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

    return Gravatar_;

})(Meteor);

BasMTR.Gravatar = Gravatar_;
export default Gravatar_;
