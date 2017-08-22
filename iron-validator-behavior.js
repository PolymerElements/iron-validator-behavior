import '../polymer/polymer.js';
import { IronMeta } from '../iron-meta/iron-meta.js';

export const IronValidatorBehavior = {
  ready: function() {
    new IronMeta({type: 'validator', key: this.is, value: this});
  },

  /**
   * Implement custom validation logic in this function.
   * @param {Object} values The value to validate. May be any type depending on the validation logic.
   * @return {Boolean} true if `values` is valid.
   */
  validate: function(values) {
  }
};
