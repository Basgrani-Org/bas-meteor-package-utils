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
  let _addBodyClassPrevSing;

  // ------------------------------------------------------------------------
  // Class Definition
  // ------------------------------------------------------------------------

  class Template_ {
    /* constructor() {

    } */

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

  // Get the parent template instance
  Blaze.TemplateInstance.prototype.parentTemplate = function (levels) {
    let view = this.view;
    if (typeof levels === 'undefined') {
      levels = 1;
    }
    while (view) {
      if (view.name.substring(0, 9) === 'Template.' && !(levels - 1)) {
        return view.templateInstance();
      }
      view = view.parentView;
    }
  };

  // Add body class
  Blaze.addBodyClass = function (fn) {
    if ($.isArray(fn)) {
      return fn.forEach(Blaze.addBodyClass);
    }
    if (typeof fn !== 'function') {
      $('body').removeClass(_addBodyClassPrevSing);
      return mtr.startup(function () {
        $('body').addClass(_addBodyClassPrevSing = fn);
      });
    }

    mtr.startup(function () {
      Tracker.autorun(function () {
        $('body')
          .removeClass(fn._prev)
          .addClass(fn._prev = fn());
      });
    });
  };

  // ------------------------------------------------------------------------
  // Meteor
  // ------------------------------------------------------------------------

  // Meteor startup
  mtr.startup(function () {
    // ...
  });

  // ------------------------------------------------------------------------
  // jQuery
  // ------------------------------------------------------------------------


  return Template_;
})(Meteor, jQuery);

BasMTR.Template = Template_;
export default Template_;
