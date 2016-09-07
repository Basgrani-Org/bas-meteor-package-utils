// Template
(function (mtr) {
    // Define start point
    if (!BasMTR.template) {
        BasMTR.template = {};
    }
    var _this = function () {
        return BasMTR.template;
    }();

    // Init only one once
    _this.init = function () {

        // Is Dev
        if (Template) {
            _this.is_dev = new ReactiveVar(false);
            mtr.call('BasMTR:is_dev', function (error, result) {
                _this.is_dev.set(result);
            });
            Template.registerHelper('is_dev', function () {
                return _this.is_dev.get();
            });
        }

        // ifCond
        if (Template) {
            Template.registerHelper('ifCond', function (v1, operator, v2) {
                switch (operator) {
                    case '===':
                        return (v1 === v2);
                    case '<':
                        return (v1 < v2);
                    case '<=':
                        return (v1 <= v2);
                    case '>':
                        return (v1 > v2);
                    case '>=':
                        return (v1 >= v2);
                    case '&&':
                        return (v1 && v2);
                    case '||':
                        return (v1 || v2);
                    default:
                        return null;
                }
            });
        }

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
