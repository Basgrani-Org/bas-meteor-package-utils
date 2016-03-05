// Set start point
var _start_point = BasUtils;

// String
(function (mtr) {
    _start_point.string = {};
    var _this = function(){return _start_point.string;}();

    /* --------------------------------------- */
    /* Is string
    /* --------------------------------------- */
    _this.is_string = function(string) {
        if (typeof string === 'string' || string instanceof String){
            return true;
        } else {
            return false;
        }
    };

    /* --------------------------------------- */
    /* Capitalize first letter
     /* --------------------------------------- */
    _this.cap_first_letter = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    /* --------------------------------------- */
    /* Repeat
    /* --------------------------------------- */
    _this.repeat = function(string, times) {
        return new Array(times + 1).join(string);
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