module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 0,
    'linebreak-style': 'off',
    'space-before-function-paren': 0,
    semi: 0,
    'vue/multiline-html-element-content-newline': 'off',
  },
}
