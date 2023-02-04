module.exports =
{
  env: { browser: true, es6: true, node: true },
  extends: ['plugin:react/recommended', 'airbnb',"eslint-config-prettier"],
  parserOptions:
  {
    ecmaFeatures:
    {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react',"eslint-plugin-prettier"],
  rules: {
    "no-underscore-dangle": 0,
    'prettier/prettier': ['error', { singleQuote: false }]
  }
}