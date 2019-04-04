module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier', 'prettier/vue'],
  plugins: ['prettier', 'vue'],
  rules: { 'prettier/prettier': ['warn', { printWidth: 100, semi: false, singleQuote: true }], 'no-console': 'off' }
}
