module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'comma-dangle': ['error', 'never']
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      rules: {
        quotes: 'off'
      }
    }
  ]
};
