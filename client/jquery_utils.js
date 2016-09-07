require('jquery');

// Client
(function (mtr, $) {
    // Define start point
    if (!BasMTR.jquery_utils) {
        BasMTR.jquery_utils = {};
    }
    var _this = function () {
        return BasMTR.jquery_utils;
    }();

    _this.window_load = false;

    /* --------------------------------------- */
    /* Remove Classes by Prefix
    /* --------------------------------------- */
    $.fn.remove_classes_by_prefix = function (prefix) {
        this.each(function (i, el) {
            var classes  = el.className.split(" ").filter(function (c) {
                return c.lastIndexOf(prefix, 0) !== 0;
            });
            el.className = $.trim(classes.join(" "));
        });
        return this;
    };

    // Init
    _this.init_$ = function () {
        //...
    };

    // Update
    _this.update = function () {
        // ...
    };

    $(document).ready(function () {
        // Init
        _this.init_$();

        // Update
        _this.update();

        // Resize
        $(window).resize(function () {

            _this.update();

        });

        // Load complete
        $(window).load(function () {
            _this.window_load = true;
        });
    });

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

}(Meteor, jQuery));
