module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren':0,
    'semi':0,
    'spaced-comment':0,
    'prefer-const':0,
    'prefer-const':0,
    'no-useless-escape':0,
    'vue/no-unused-vars':0
  }
}
