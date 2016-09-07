// Lib -> Match
(function (mtr) {
    // Set start point
    if (!BasMTR.match) {
        BasMTR.match = {};
    }
    var _this = function () {
        return BasMTR.match;
    }();

    /* --------------------------------------- */
    /* Is positive integer
    /* --------------------------------------- */
    _this.is_positive_integer = function (number) {
        var _positive = Match.Where(function (x) {
            check(x, Match.Integer);
            return x >= 0;
        });
        check(number, _positive);
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
