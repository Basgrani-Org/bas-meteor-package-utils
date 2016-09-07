// Lib -> String
(function (mtr) {
    // Set start point
    if (!BasMTR.string) {
        BasMTR.string = {};
    }
    var _this = function () {
        return BasMTR.string;
    }();

    /* --------------------------------------- */
    /* Guid
    /* --------------------------------------- */
    _this.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };

    /* --------------------------------------- */
    /* Basename
    /* --------------------------------------- */
    _this.basename = function (path, suffix) {
        var b        = path;
        var lastChar = b.charAt(b.length - 1);

        if (lastChar === '/' || lastChar === '\\') {
            b = b.slice(0, -1);
        }

        b = b.replace(/^.*[\/\\]/g, '');

        if (typeof suffix === 'string' && b.substr(b.length - suffix.length) === suffix) {
            b = b.substr(0, b.length - suffix.length);
        }

        return b;
    };

    /* --------------------------------------- */
    /* Slug
    /* --------------------------------------- */
    _this.slug = function (str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
        var to   = "aaaaaeeeeeiiiiooooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

        return str;
    };

    /* --------------------------------------- */
    /* Is string
    /* --------------------------------------- */
    _this.is_string = function (string) {
        return (typeof string === 'string' || string instanceof String);
    };

    /* --------------------------------------- */
    /* Capitalize first letter
    /* --------------------------------------- */
    _this.cap_first_letter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    /* --------------------------------------- */
    /* Repeat
    /* --------------------------------------- */
    _this.repeat = function (string, times) {
        return new Array(times + 1).join(string);
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