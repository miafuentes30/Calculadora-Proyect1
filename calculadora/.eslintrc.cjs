module.exports = {
  extends: ['standard-with-typescript'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120 }]
  }
}
