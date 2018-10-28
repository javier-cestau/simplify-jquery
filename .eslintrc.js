module.exports = {
  root: true,
  env: {
    browser: true
  },
  'parser': "babel-eslint",
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  "globals": {
    // If "no-undef" is enabled below, be sure to list all global variables that
    // are used in this app's backend code (including the globalIds of models):
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    "$": true
  },
  // add your custom rules here
  'rules': {
    // allow async-await
    'generator-star-spacing': 'off',

    // allow paren-less arrow functions
    'arrow-parens': 0,
    'one-var': 0,
    'handle-callback-err': 0,
    'no-unused-vars': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-tabs': 0
    // 'import/first': 0,
    // 'import/named': 2,
    // 'import/namespace': 2,
    // 'import/default': 2,
    // 'import/export': 2,
    // 'import/extensions': 0,
    // 'import/no-unresolved': 0,
    // 'import/no-extraneous-dependencies': 0,
  }
}
