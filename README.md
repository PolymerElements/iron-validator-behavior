[![Published on NPM](https://img.shields.io/npm/v/@polymer/iron-validator-behavior.svg)](https://www.npmjs.com/package/@polymer/iron-validator-behavior)
[![Build status](https://travis-ci.org/PolymerElements/iron-validator-behavior.svg?branch=master)](https://travis-ci.org/PolymerElements/iron-validator-behavior)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/iron-validator-behavior)

## IronValidatorBehavior
Use `IronValidatorBehavior` to implement a custom input/form validator. Element
instances implementing this behavior will be registered for use in elements that implement
`IronValidatableBehavior`.

See: [Documentation](https://www.webcomponents.org/element/@polymer/iron-validator-behavior),
  [Demo](https://www.webcomponents.org/element/@polymer/iron-validator-behavior/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/iron-validator-behavior
```

### In a Polymer 3 element that is a validator
```js
import {PolymerElement, html} from '@polymer/polymer';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {IronValidatorBehavior} from '@polymer/iron-validator-behavior/iron-validator-behavior.js';

class SampleValidator extends mixinBehaviors([IronValidatorBehavior], PolymerElement){
  // This validator only validates strings, and is only valid if
  // the value is "cat".
  function validate(value) {
    return value === 'cat';
  }
}
customElements.define('sample-validator', SampleValidator);
```

### Using this validator element in an html file
```html
<html>
  <head>
    <script type="module">
      import '../sample-validator.js';
    </script>
  </head>
  <body>
    <sample-validator id="aValidator"></sample-validator>
    <input id="input">
    <script>
      input.addEventListener('input', function(event) {
        var valid = aValidator.validate(input.value);
        if (valid)
          input.removeAttribute('invalid');
        else
          input.setAttribute('invalid', true);
      });
    </script>
  </body>
</html>
```

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/iron-validator-behavior
cd iron-validator-behavior
npm install
npm install -g polymer-cli
```

### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
