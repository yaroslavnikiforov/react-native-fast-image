module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
