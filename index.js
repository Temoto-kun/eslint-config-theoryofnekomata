module.exports = {
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "script",
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },
  "env": {
    "commonjs": true
  },
  "rules": {
    "valid-jsdoc": "error",
    "eqeqeq": "error",
    "valid-typeof": "error",
    "no-alert": "error",
    "default-case": "error",
    "no-else-return": "error",
    "no-fallthrough": "error",
    "no-throw-literal": "error",
    "no-void": "error",
    "no-with": "error",
    "vars-on-top": "error",
    "no-undefined": "error",
    "no-use-before-define": "error",
    "no-path-concat": "error",
    "global-require": "error",
    "eol-last": "error",
    "camelcase": "error",
    "func-names": "error",
    "no-array-constructor": "error",
    "no-lonely-if": "error",
    "wrap-iife": ["error", "inside"],
    "one-var": ["error", "always"],
    "semi": ["error", "always"],
    "spaced-comment": ["error", "always"]
  }
};
