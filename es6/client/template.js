import 'jquery';

const Template_ = ((mtr, $) => {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    const VERSION = BasMTR.Utils.VERSION;

    // ------------------------------------------------------------------------
    // Vars
    // ------------------------------------------------------------------------

    let _isDev;

    // ------------------------------------------------------------------------
    // Class Definition
    // ------------------------------------------------------------------------

    class Template_ {

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


        // Static Private
        // ------------------------------------------------------------------------


    }

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    // Is Dev
    if (Template) {
        _isDev = new ReactiveVar(false);
        mtr.call('BasMTR:isDev', function (error, result) {
            _isDev.set(result);
        });
        Template.registerHelper('isDev', function () {
            return _isDev.get();
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

    // ------------------------------------------------------------------------
    // Meteor
    // ------------------------------------------------------------------------

    // Meteor startup
    mtr.startup(function () {
        //...
    });

    // ------------------------------------------------------------------------
    // jQuery
    // ------------------------------------------------------------------------


    return Template_;

})(Meteor, jQuery);

BasMTR.Template = Template_;
export default Template_;
