import _ from 'underscore';
import string from './string';

const Object_ = ((mtr) => {
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

  class Object_ {
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

    // Clone object
    static cloneObject(obj) {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }
      const temp = obj.constructor(); // give temp the original obj's constructor
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && temp.hasOwnProperty(key)) {
          temp[key] = Object_.cloneObject(obj[key]);
        }
      }
      return temp;
    }

    // Compare object
    static compareObjects(o1, o2) {
      for (const k in o1) {
        if (o1.hasOwnProperty(k) && o1[k] !== o2[k]) {
          return false;
        }
      }
      for (const k in o2) {
        if (o2.hasOwnProperty(k) && o1[k] !== o2[k]) {
          return false;
        }
      }
      return true;
    }

    // Item exists
    static itemExists(haystack, needle) {
      for (let i = 0; i < haystack.length; i += 1) {
        if (Object_.compareObjects(haystack[i], needle)) {
          return true;
        }
      }
      return false;
    }

    // Search objects
    static searchObjects(query, objects) {
      const results = [];
      query = query.trim().toLowerCase();
      for (let i = 0; i < objects.length; i += 1) {
        for (const key in objects[i]) {
          if (objects[i].hasOwnProperty(key) && string.isString(objects[i][key])) {
            const obj = objects[i][key].toLowerCase();
            if (obj.indexOf(query) !== -1) {
              if (!Object_.itemExists(results, objects[i])) {
                results.push(objects[i]);
              }
            }
          }
        }
      }
      return results;
    }

    // Get Default
    static getDefault(obj, key, default_val) {
      if (obj && _.has(obj, key)) {
        return obj[key];
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

  return Object_;
})(Meteor);

BasMTR.Object = Object_;
export default Object_;
