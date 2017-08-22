import '../../polymer/polymer.js';
import { IronValidatorBehavior } from '../iron-validator-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({

  is: 'simple-validator',

  behaviors: [
    IronValidatorBehavior
  ]

});
