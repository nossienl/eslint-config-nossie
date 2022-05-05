module.exports = {
  // eslint-configs
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  // eslint-plugins
  plugins: ['simple-import-sort'],
  // enabling/disabling/changing level of rules
  rules: {
    'class-methods-use-this': 'off',
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'prettier/prettier': [
      'error',
      // configure Prettier for ESLint
      {
        arrowParens: 'avoid',
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};

// We can omit the eslint-config- prefix in our package's name. Eg if our package is called eslint-config-example:
// {
//   "extends": "nossie"
// }
