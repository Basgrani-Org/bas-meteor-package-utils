// Set start point
var _start_point = BasUtils;

// String
(function (mtr) {
    _start_point.match = {};
    var _this = function(){return _start_point.match;}();

    /* --------------------------------------- */
    /* Is positive integer
    /* --------------------------------------- */
    _this.is_positive_integer = function(number) {
        var _positive = Match.Where(function(x) {
            check(x, Match.Integer);
            return x >= 0;
        });
        check(number, _positive);
    };

    // Init
    _this.init = function() {
        //...
    };

    // Update
    _this.update = function() {
        // ...
    };

    // Meteor startup
    mtr.startup(function () {
        // Init
        _this.init();
    });

}( Meteor ));
