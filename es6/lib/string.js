// import _ from 'underscore';

const String_ = ((mtr) => {
  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  const VERSION = BasMTR.Utils.VERSION;

  // ------------------------------------------------------------------------
  // Vars
  // ------------------------------------------------------------------------


  // ------------------------------------------------------------------------
  // Class Definition
  // ------------------------------------------------------------------------

  class String_ {
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

    // Guid
    static guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }

      return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    }

    // Basename
    static basename(path, suffix) {
      let b = path;
      const lastChar = b.charAt(b.length - 1);

      if (lastChar === '/' || lastChar === '\\') {
        b = b.slice(0, -1);
      }

      b = b.replace(/^.*[\/\\]/g, '');

      if (typeof suffix === 'string' && b.substr(b.length - suffix.length) === suffix) {
        b = b.substr(0, b.length - suffix.length);
      }

      return b;
    }

    // Slug
    static slug(str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
      const to = 'aaaaaeeeeeiiiiooooouuuunc------';
      for (let i = 0, l = from.length; i < l; i += 1) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

      return str;
    }

    // Is string
    static isString(string) {
      return (typeof string === 'string' || string instanceof String);
    }

    // Capitalize first letter
    static capFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Repeat
    static repeat(string, times) {
      return new Array(times + 1).join(string);
    }

    // Get Attribute
    static getAttribute(string, key) {
      const _key = `${key}="`;
      const start = string.indexOf(_key) + _key.length;
      const end = string.indexOf('"', start + 1);
      return string.substring(start, end);
    }

    // Get Default
    static getDefault(string, default_val) {
      if (string) {
        return string;
      }

      return default_val !== undefined ? default_val : '';
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
    // ...
  });

  return String_;
})(Meteor);

BasMTR.String = String_;
export default String_;
