// Lib -> Helps
(function (mtr) {
    // Set start point
    if (!BasMTR.helps) {
        BasMTR.helps = {};
    }
    var _this = function () {
        return BasMTR.helps;
    }();

    /* --------------------------------------- */
    /* Delay
    /* --------------------------------------- */
    _this.delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    /* --------------------------------------- */
    /* Get image Base 64
    /* --------------------------------------- */
    _this.get_img_base_64 = function (src) {
        return src.indexOf('data:image') !== -1 ? src.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "") : null;
    };

    /* --------------------------------------- */
    /* Add http
    /* --------------------------------------- */
    _this.add_http = function (url) {
        if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
            url = "http://" + url;
        }
        return url;
    };

    /* --------------------------------------- */
    /* Valid url
    /* --------------------------------------- */
    _this.valid_url = function (str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return pattern.test(str);
    };

    // Init only one once
    _this.init = function () {
        //...
    };

    // Meteor startup
    mtr.startup(function () {
        //...
    });

    // Init
    if (!_this.is_init) {
        _this.init();
        _this.is_init = true;
    }

}(Meteor));
