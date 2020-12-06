module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "arrowFunctions": true,
      "jsx": true,
      "restParams": true,
      "spread": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier",
    "jest"
  ],
  "rules": {
    "@typescript-eslint/indent": "off",
    "linebreak-style": "off",
    "quotes": [
      "error",
      "double"
    ],
    "no-extra-semi": "error",
    "react/destructuring-assignment": [2, "always"],
    "react/prefer-es6-class": "warn",
    "react/prop-types": "off",
    "react/display-name": "warn",
    "func-names": ["error", "as-needed"],
    "no-plusplus": "off",
    "max-len": [
      "warn",
      {
        "code": 120,
        "ignoreComments": false
      }
    ],
    "no-shadow": [
      "error",
      { "builtinGlobals": false, "hoist": "functions", "allow": [] }
    ],
    "no-console": "warn",
    "no-extra-semi": "warn",
    "no-unused-vars": [
      "error",
      {
        "ignoreRestSiblings": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": false,
        "jsxSingleQuote": false,
        "printWidth": 120,
        "trailingComma": "all"
      }
    ],
    "strict": ["error", "safe"],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "spaced-comment": ["error", "always"],
    "vars-on-top": "error",
    "no-shadow": [
      "error",
      { "builtinGlobals": false, "hoist": "functions", "allow": [] }
    ],
    "no-console": "warn",
  },
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "detect",
      "flowVersion": "0.53"
    },
  }
};
