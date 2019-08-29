module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "consistent-return": 0,
    "no-console": 0,
    "no-unused-vars": 1,
    "no-unused-expressions": 0,
    "no-underscore-dangle": 0,
    "comma-dangle": 0,
    "nonblock-statement-body-position": 0,
    "operator-linebreak": 0,
    "arrow-body-style": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "global-require": 0,
    "arrow-parens": 0,
    "implicit-arrow-linebreak": 0,
    "linebreak-style": 0,
  },
}
