/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import {IronMeta} from '@polymer/iron-meta/iron-meta.js';

/**
 * Use `IronValidatorBehavior` to implement a custom input/form
 * validator. Element instances implementing this behavior will be registered
 * for use in elements that implement `IronValidatableBehavior`.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
export const IronValidatorBehavior = {
  ready: function() {
    new IronMeta(
        {type: 'validator', key: this.is || this.constructor.is, value: this});
  },

  /**
   * Implement custom validation logic in this function.
   * @param {Object} values The value to validate. May be any type depending on the validation logic.
   * @return {boolean} true if `values` is valid.
   */
  validate: function(values) {}
};
