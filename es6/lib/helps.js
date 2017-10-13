const Helps_ = ((mtr) => {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    const VERSION = BasMTR.Utils.VERSION;

    // ------------------------------------------------------------------------
    // Vars
    // ------------------------------------------------------------------------

    let delayIds = [];

    // ------------------------------------------------------------------------
    // Class Definition
    // ------------------------------------------------------------------------

    class Helps_ {

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

        // Delay
        static delay(callback, ms, args, id = 0) {
            clearTimeout(delayIds[id] ? delayIds[id] : 0);
            delayIds[id] = setTimeout(callback, ms, args);
            return delayIds[id];
        }

        // Get image Base 64
        static getImgBase64(src) {
            return src.indexOf('data:image') !== -1 ? src.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "") : null;
        }

        // Add http
        static addHttp(url) {
            if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
                url = "http://" + url;
            }
            return url;
        }

        // Valid url
        static validUrl(str) {
            let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            return pattern.test(str);
        }

        // Get Default
        static getDefault(fn, default_val = undefined) {
            try {
                return fn() !== undefined ? fn() : default_val;
            }
            catch (err) {
                return default_val;
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

    return Helps_;

})(Meteor);

BasMTR.Helps = Helps_;
export default Helps_;
